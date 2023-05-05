import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
interface ButtonStyle {
  text: string
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}
interface State {
  show: boolean
  title: string
  content: string
  button: ButtonStyle
  optionButton?: ButtonStyle
}

export const useConfirmModal = defineStore('confirmModal', () => {
  const state = ref<State>({
    show: true,
    title: '',
    content: '',
    button: {
      text: '',
      variant: 'info'
    },
    optionButton: undefined
  })

  const resolver = ref<(val: boolean) => void>()

  function confirm(
    title: string,
    content: string,
    button: ButtonStyle,
    optionButton?: ButtonStyle
  ): Promise<boolean> {
    state.value = {
      show: true,
      title: title,
      content: content,
      button: button,
      optionButton: optionButton
    }

    return new Promise<boolean>((resolve) => {
      resolver.value = resolve
    })
  }

  function _buttonClick(val: boolean) {
    const func = resolver.value
    if (func) {
      func(val)
    }
  }

  return {
    _show: computed(() => state.value.show),
    _title: computed(() => state.value.title),
    _content: computed(() => state.value.content),
    _button: computed<ButtonStyle>(() => state.value.button),
    _optionButton: computed<ButtonStyle | undefined>(() => state.value.optionButton),
    _buttonClick,
    confirm
  }
})
