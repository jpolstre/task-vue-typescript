import Vue, { } from 'vue'
import NotifyCmp from './NotifyCmp.vue'
import { CombinedVueInstance } from 'vue/types/vue'




export enum EColor {
  POSITIVE = 'positive',
  NEGATIVE = 'negative'
}

export interface INotify {
  message: string
  color: string
  lifeTime?: number
}

class Notify {
  readonly props: INotify
  private vueCmp!: CombinedVueInstance<Record<never, any> & Vue, object, object, object, Record<never, any>>

  constructor(params: INotify) {
    console.log('Notify')
    this.props = params
    this.show()
  }


  // private creteHtmlContainer() {
  //   let notifyContainer = document.getElementById("#notify-container");
  //   if (!notifyContainer) {
  //     let notifyContainer = document.createElement("div");
  //     notifyContainer.id = "notify-container";
  //     document.body.appendChild(notifyContainer);
  //     // await new Promise(r => setTimeout(r, 500));
  //   }
  //   // let container = document.createElement("div");
  //   // container.id = "container";
  //   // notifyContainer?.appendChild(container);

  //   // return notifyContainer

  //   // while (!notifyContainer) {
  //   //   await new Promise(resolve => requestAnimationFrame(resolve))
  //   // }
  //   // console.log(notifyContainer)
  //   // return notifyContainer
  // }


  // private async checkElement(selector: string) {
  //   while (!document.querySelector(selector)) {
  //     await new Promise(resolve => requestAnimationFrame(resolve))
  //   }
  //   return document.querySelector(selector);
  // }



  public async show() {
    // console.log(notifyContainer)
    // const elem: HTMLDivElement = (await this.creteHtmlTags()) as HTMLDivElement

    //  const vueCmp = new Vue({
    //     el: "#notify-container",

    //     render: h => h()
    //   });

    // if (document.getElementById('#container')) {
    // this.vueCmp = new NotifyCmp()

    const ComponentClass = Vue.extend(NotifyCmp)

    this.vueCmp = new ComponentClass({
      propsData: { props: this.props },

    })

    this.vueCmp.$mount()


    // instance.$slots.default = ['Click me!']
    this.vueCmp.$el.setAttribute('style', `--color: var(--${this.props.color})`)
    this.vueCmp.$on('on-remove', () => {
      const remove = this.remove.bind(this)//pasando el escope
      remove()
    })

    let notifyContainer = document.getElementById("notify-container");
    if (!notifyContainer) {
      let notifyContainer = document.createElement("div");
      notifyContainer.id = "notify-container";
      document.body.appendChild(notifyContainer);
      notifyContainer.prepend(this.vueCmp.$el)
      // await new Promise(r => setTimeout(r, 500));
    } else {
      notifyContainer.prepend(this.vueCmp.$el)

    }

    setTimeout(() => {
      this.remove()
    }, this.props.lifeTime || 7000)
    // }

    // console.log(vueCmp.$delete())
  }
  // vueCmp: NotifyCmp
  public remove() {
    console.log('remove')
    this.vueCmp?.$el.classList.add("hide");
    setTimeout(() => {
      this.vueCmp?.$el.remove();
      this.vueCmp?.$destroy()
    }, 300);
  }
}

export default Notify