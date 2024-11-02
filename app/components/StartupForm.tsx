'use client'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

import MDEditor from '@uiw/react-md-editor'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'


const StartupForm = () => {

      const [errors, setErrors] = useState<Record<string, string>>({})
      const [pitch, setPitch] = useState('')

      const isPending = false 
      // the isPending is for knowing whether the create Startuo form has been submitted or not

      return (
            <form action = {() => {}} className = "startup-form">
                  <div>
                        <label htmlFor="title" className = "startup-form_label">
                              Title
                        </label>

                        <Input 
                              id = 'title'
                              name = 'title'
                              className = 'startup-form_input'
                              required 
                              placeholder='Your Startup Title'
                        />

                        { errors.title && <p className = "startup-form_error">{errors.title}</p>}

                  </div>

                  <div>
                        <label htmlFor="description" className = "startup-form_label">
                              Description
                        </label>

                        <Textarea 
                              id = 'description'
                              name = 'description'
                              className = 'startup-form_textarea'
                              required 
                              placeholder='Your Startup Description'
                        />

                        { errors.description && <p className = "startup-form_error">{errors.description}</p>}

                  </div>

                  <div>
                        <label htmlFor="category" className = "startup-form_label">
                              Category
                        </label>

                        <Input 
                              id = 'category'
                              name = 'category'
                              className = 'startup-form_input'
                              required 
                              placeholder='Your Startup Category (Tech, Education, AI..)'
                        />

                        { errors.category && <p className = "startup-form_error">{errors.category}</p>}

                  </div>

                  <div>
                        <label htmlFor="link" className = "startup-form_label">
                              Image URL
                        </label>

                        <Input 
                              id = 'link'
                              name = 'link'
                              className = 'startup-form_input'
                              required 
                              placeholder='Your Startup Image URL'
                        />

                        { errors.link && <p className = "startup-form_error">{errors.link}</p>}

                  </div>

                  <div data-color-mode = "light">
                        <label htmlFor="pitch" className = "startup-form_label">
                              Pitch
                        </label>

                        <MDEditor
                              value={pitch}
                              onChange={(value) => { setPitch(value as string)} }

                              id = "pitch"
                              preview = "edit"
                              height={300}

                              style = {{ borderRadius: 20, overflow: 'hidden' }}
                              textareaProps={{
                                    placeholder: 'Describe your idea and the problem it solves'
                              }}

                              previewOptions={{
                                    disallowedElements: ['style']
                              }}
                        />

                        { errors.link && <p className = "startup-form_error">{errors.link}</p>}

                  </div>

                  <Button type = "submit" className = "startup-form_btn !text-primary" disabled = {isPending}>
                        { isPending ? "Submitting.." : "Submit your Startup"}
                        <Send className = "size-6 ml-1" />
                  </Button>
            </form>
      )

}

export default StartupForm