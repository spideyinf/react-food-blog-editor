import React, { Component } from 'react'
import { Form, Input, Button } from 'reactstrap'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import Loading from 'components/Loading'
import Images from 'components/Images'
import UploadButton from 'components/UploadButton'
import { API_URL } from './config'
import { BlogWrapper, Main, FormWrapper } from './style'

export class FoodBlogEditor extends Component {
  state = {
    uploading: false,
    images: [],
    content: '',
  }

  onChange = e => {
    const files = Array.from(e.target.files)
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(images => {
        this.setState({
          uploading: false,
          images,
        })
      })
  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id),
    })
  }

  handleChange = value => {
    this.setState({ content: value })
  }

  quillModules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
    ]
  }

  quillFormats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]

  handleSubmit = e => {
    e.preventDefault()
    console.log('Submitted')
  }

  render() {
    const { uploading, images, content } = this.state

    const imageUpload = () => {
      switch (true) {
        case uploading:
          return <Loading />
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />
        default:
          return <UploadButton onChange={this.onChange} />
      }
    }

    return (
      <BlogWrapper>
        <Main>
          <h1 className="title">Food Blog Editor</h1>
          <Form noValidate onSubmit={this.handleSubmit}>
            <FormWrapper>
              <div className="content-form">
                <Input
                  type="text"
                  name="blogName"
                  id="blogName"
                  placeholder="Insert your Food blog name"
                  bsSize="lg"
                />
                <ReactQuill
                  value={content}
                  onChange={this.handleChange}
                  formats={this.quillFormats}
                  modules={this.quillModules}
                />
                <div className="w-100 text-center mt-5">
                  <Button type="submit" color="primary" className="btn-blog" size="lg">
                    PUBLISH
                  </Button>
                </div>
              </div>
              {imageUpload()}
            </FormWrapper>
          </Form>
        </Main>
      </BlogWrapper>
    )
  }
}

export default FoodBlogEditor
