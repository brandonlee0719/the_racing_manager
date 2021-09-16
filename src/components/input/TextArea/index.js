/**
*  @module react
*/
import React, { Component } from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
*  @module classNames
*/
import classNames from 'utils/classnames'

/**
 *  @module BaseAccordion
 */
import Accordion from 'components/accordion/BaseAccordion'

/**
 *  @module InputError
 */
import InputError from 'components/input/InputError'

/**
 *  @module debounce
 */
import debounce from 'utils/debounce'

/**
*  @module InputLine
*/
import InputLine from 'components/input/InputLine'

/**
 *  @class
 *  @extends {Component}
 */

import {Editor} from 'react-draft-wysiwyg'
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import {draftToMarkdown, markdownToDraft} from 'markdown-draft-js'

const toolbarOptions = {
  options: [
    'inline',
    'list',
    'link',
    'emoji',
  ],
  inline: {
    options: [
      'bold',
      'italic',
      'underline'
    ]
  },
  emoji: {
    emojis: [
      '🐴', '🏇', '🦄', '🐎', '🎠', '😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓',
      '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈',
      '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
      '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕',
      '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥',
      '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
      '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈',
      '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅',
      '✅', '❎', '💯',
    ]
  }
}

class TextArea extends Component {
  /**
   *  @constructor
   *  @param  {Object} props
   */
  constructor (props) {
    super(props)

    this.state = {
      wysiwygState: EditorState.createEmpty()
    }

    // Textarea ref
    this.textareaRef = null
    this.timeoutCache = null

    // Bind custom fns
    this.autoSize = this.autoSize.bind(this)
    this.onEditorStateChange = this.onEditorStateChange.bind(this)
    this.setWYSIWYGWithContent = this.setWYSIWYGWithContent.bind(this)

    this.debounceResize = debounce(this.autoSize)
  }

  componentDidMount () {
    const {
      value,
      markdown
    } = this.props
    if (this.props.autoGrow && this.textareaRef) {
      this.textareaRef.addEventListener('input', this.autoSize, false)
      window.addEventListener('resize', this.debounceResize, false)
      this.autoSize()
    }

    if (markdown && value) {
      this.setWYSIWYGWithContent(value)
    }
  }

  componentWillUnmount () {
    if (this.textareaRef) {
      this.textareaRef.removeEventListener('input', this.autoSize, false)
      window.removeEventListener('resize', this.debounceResize, false)
    }

    if (this.timeoutCache) {
      clearTimeout(this.timeoutCache)
    }
  }

  /**
   *  focusField
   */
  focusField () {
    this.textareaRef.focus()
  }

  /**
   *  autoSize
   */
  autoSize () {
    if (!this.textareaRef) {
      return false
    }

    // Set the style
    this.textareaRef.style.height = `${this.props.minHeight}px`
    this.textareaRef.style.height = `${Math.max(this.textareaRef.scrollHeight, this.props.minHeight)}px`
  }

  render () {
    /**
     *  @const
     */
    const {
      type,
      placeholder,
      name,
      value,
      error,
      className,
      modifier,
      handleSubmit,
      handleBlur,
      handleFocus,
      handleChange,
      maxLength,
      showBar,
      markdown
    } = this.props

    /**
     *  hasError
     *  @const
     *  @type {Boolean}
     */
    const hasError = error && !!error.length

    /**
     *  className
     *  @const
     *  @type {String}
     */
    const modifiedClassNames = classNames('textarea', className, modifier, {
      border: showBar
    })

    const {
      wysiwygState
    } = this.state

    return (
      <div className={modifiedClassNames}>
        {
          !markdown
            ? (
              <textarea
                ref={ref => { this.textareaRef = ref }}
                className='textarea'
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onSubmit={handleSubmit}
                onBlur={handleBlur}
                onFocus={handleFocus}
                maxLength={maxLength}
                onChange={handleChange} />)
            : (
              <div className='wysiwyg'>
                <Editor
                  editorState={wysiwygState}
                  onEditorStateChange={this.onEditorStateChange}
                  toolbar={toolbarOptions}
                />
              </div>
            )
        }
        {
          showBar
          ? (
              <InputLine error={hasError} className='textarea__line'/>
            )
          : null
        }
        <Accordion
          className='input__accordion'
          isOpen={hasError}>
          <InputError
            className='micro'
            errors={error} />
        </Accordion>
      </div>
    )
  }

  setWYSIWYGWithContent (content) {
    this.setState({wysiwygState: EditorState.createWithContent(convertFromRaw(markdownToDraft(content)))})
  }

  onEditorStateChange (editorState) {
    const markdown = draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
    this.props.handleChange({target: {value: markdown}})
    this.setState({wysiwygState: editorState})
  }
}

/**
 *  defaultProps
 *  @type {Object}
 */
TextArea.defaultProps = {
  type: 'text',
  minHeight: 40,
  autoGrow: true,
  maxLength: Infinity,
  showBar: false,
  markdown: false,
}

/**
 *  propTypes
 *  @type {Object}
 */
TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  error: PropTypes.array,
  handleSubmit: PropTypes.func,
  handleBlur: PropTypes.func,
  handleFocus: PropTypes.func,
  handleChange: PropTypes.func,
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  minHeight: PropTypes.number,
  autoGrow: PropTypes.bool,
  showBar: PropTypes.bool,
  markdown: PropTypes.bool,
}

/**
 *  @module TextArea
 */
export default TextArea
