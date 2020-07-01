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
}

interface IActionsDialog {
  onOk: () => void
  onCancel: () => void
}

class Dialog {
  private type: IDialog['type']
  private title: IDialog['title']
  private content: IDialog['content']

  private backCover!: HTMLDivElement

  public onOk!: IActionsDialog['onOk']
  public onCancel!: IActionsDialog['onCancel']

  component!: CombinedVueInstance<Record<never, any> & Vue, object, object, object, Record<never, any>>

  constructor({ type, title, content, onOk, onCancel }: IDialog & IActionsDialog) {
    this.type = type
    this.title = title
    this.content = content

    this.onOk = onOk
    this.onCancel = onCancel

    this.show()
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
      opacity: 0.8;
      width: 100vw;
      height: 100vh;
      z-index: 0;`

    document.body.appendChild(this.backCover)

    const bodyContent = this.component.$el.querySelector('div.body')
    if (bodyContent) {
      bodyContent.innerHTML = this.content
    }

    document.getElementById('app')?.appendChild(this.component.$el)
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
    }, 200)

  }
}

export default Dialog