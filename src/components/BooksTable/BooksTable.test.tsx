import '../../util/matchMedia'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import BooksTable from './BooksTable'

const mockFetchResponse = (response: any, reject: boolean = false) => {
  global.fetch = jest.fn(() =>
    reject
      ? Promise.reject(response)
      : Promise.resolve({
          ok: true,
          json: () => Promise.resolve(response),
        })
  ) as jest.Mock
}

describe('BooksTable', () => {
  afterEach(() => {
    ;(global.fetch as jest.Mock).mockClear()
  })

  it('renders the component', () => {
    mockFetchResponse({
      docs: [
        {
          key: 'somekey',
          title: 'a good book',
          author_name: ['good author'],
          first_publish_year: 1999,
        },
      ],
    })
    render(<BooksTable search={'example'} />)
  })

  it('renders the component when error', () => {
    mockFetchResponse('error')
    render(<BooksTable search={'example'} />)
  })
})
