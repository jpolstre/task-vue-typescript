import Vue from 'vue'
import DialogCmp from './DialogCmp.vue'
import { CombinedVueInstance } from 'vue/types/vue'

export enum ETypeDialog {
  FORM = 'form',
  CONFIRM = 'confirm',
  ALERT = 'alert'
}

export interface IDialog {
  type?: ETypeDialog
  title: string
  content: string
  draggable?: boolean
}

interface IActionsDialog {
  onOk: () => void
  onCancel: () => void
}

class Dialog {
  private type: IDialog['type']
  private title: IDialog['title']
  private content: IDialog['content']
  private draggable: IDialog['draggable']

  private backCover!: HTMLDivElement

  // draggabble properties

  public onOk!: IActionsDialog['onOk']
  public onCancel!: IActionsDialog['onCancel']

  component!: CombinedVueInstance<Record<never, any> & Vue, object, object, object, Record<never, any>>


  //  { type, title, content, onOk, onCancel } 
  constructor(args: IDialog & IActionsDialog) {

    this.type = args.type || ETypeDialog.CONFIRM
    this.title = args.title
    this.content = args.content
    this.draggable = args.draggable || true

    this.onOk = args.onOk
    this.onCancel = args.onCancel

    this.show()
  }


  private onMouseDown(event: MouseEvent, dragElement: HTMLDivElement, isDragging: boolean) {

    // let dragElement = document.body.closest('.draggable');

    if (!dragElement) return;

    event.preventDefault();

    dragElement.ondragstart = function () {
      return false;
    };

    let shiftX: number, shiftY: number;

    startDrag(dragElement, event.clientX, event.clientY);

    function onMouseUp(event: MouseEvent) {
      finishDrag();
    };

    function onMouseMove(event: MouseEvent) {
      moveAt(event.clientX, event.clientY);
    }

    // on drag start:
    //   remember the initial shift
    //   move the element position:fixed and a direct child of body
    function startDrag(element: HTMLDivElement, clientX: number, clientY: number) {
      if (isDragging) {
        return;
      }

      isDragging = true;

      document.addEventListener('mousemove', onMouseMove);
      element.addEventListener('mouseup', onMouseUp);

      shiftX = clientX - element.getBoundingClientRect().left;
      shiftY = clientY - element.getBoundingClientRect().top;

      element.style.position = 'fixed';
      element.style.transform = 'none';

      moveAt(clientX, clientY);
    };

    function finishDrag() {
      if (!isDragging) {
        return;
      }
      isDragging = false;

      dragElement.style.top = parseInt(dragElement.style.top) + window.pageYOffset + 'px';
      dragElement.style.position = 'absolute';

      document.removeEventListener('mousemove', onMouseMove);
      dragElement.removeEventListener('mouseup', onMouseUp);
    }

    function moveAt(clientX: number, clientY: number) {
      // new window-relative coordinates
      let newX = clientX - shiftX;
      let newY = clientY - shiftY;

      let newBottom = newY + dragElement.offsetHeight;

      if (newBottom > document.documentElement.clientHeight) {
        let docBottom = document.documentElement.getBoundingClientRect().bottom;

        let scrollY = Math.min(docBottom - newBottom, 10);

        if (scrollY < 0) scrollY = 0;

        window.scrollBy(0, scrollY);

        newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
      }

      if (newY < 0) {
        // scroll up
        let scrollY = Math.min(-newY, 10);
        if (scrollY < 0) scrollY = 0;

        window.scrollBy(0, -scrollY);
        newY = Math.max(newY, 0);
      }
      if (newX < 0) newX = 0;
      if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
        newX = document.documentElement.clientWidth - dragElement.offsetWidth;
      }

      dragElement.style.left = newX + 'px';
      dragElement.style.top = newY + 'px';
    }

  }

  private show() {
    const ComponentClass = Vue.extend(DialogCmp)
    this.component = new ComponentClass({
      propsData: {
        type: this.type,
        title: this.title,
      },
      mounted() {
        // console.log(this.props)
        this.$el.classList.add("show");
      }

    }).$mount().$on('hide', () => {
      this.onHide()
    }).$on('ok', () => {
      this.onOk()
      this.onHide()
    }).$on('cancel', () => {
      this.onCancel()
      this.onHide()
    })

    this.backCover = document.createElement('div')
    this.backCover.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      background-color: black;
      opacity: 0.6;
      width: 100vw;
      height: 100vh;
      z-index: 0;`

    document.body.appendChild(this.backCover)

    const bodyContent = this.component.$el.querySelector('div.body')
    if (bodyContent) {
      bodyContent.innerHTML = this.content
    }


    const element = (this.component.$el as HTMLDivElement)

    if (this.draggable) {
      let isDragging = false
      document.getElementById('app')?.addEventListener('mousedown', (e: MouseEvent) => {
        this.onMouseDown(e, element, isDragging)
      })
    }


    document.getElementById('app')?.appendChild(element)
  }

  private onHide() {
    const hide = this.hide.bind(this)
    hide()
  }

  private hide() {
    this.component.$el.classList.add('hide')

    setTimeout(() => {
      this.component.$el.remove()
      this.component.$destroy()
      this.backCover.remove()

      document.getElementById('app')?.removeEventListener('mousedown', (e: MouseEvent) => {
        this.onMouseDown(e, (this.component.$el as HTMLDivElement), false)
      })
    }, 200)

  }
}

export default Dialog