import React from 'react'
import MDEditor from '@uiw/react-md-editor'
import type { FieldProps } from 'payload/com ponents/forms'

const MarkdownEditor: React.FC<FieldProps<string>> = ({ path, value, onChange }) => {
  return (
    <div data-color-mode="light">
      <MDEditor
        value={value || ''}
        onChange={(val) => onChange(val)}
        height={500}
      />
    </div>
  )
}

export default MarkdownEditor
