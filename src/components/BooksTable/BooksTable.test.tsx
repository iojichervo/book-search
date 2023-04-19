import { SWRConfig } from 'swr'
import '../../util/matchMedia'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BooksTable from './BooksTable'

describe('BooksTable', () => {
  it('renders the component', () => {
    const fetcher = () => {
      return {
        docs: [
          {
            key: 'somekey',
            title: 'a good book',
            author_name: ['good author'],
            first_publish_year: 1999,
          },
        ],
      }
    }

    render(
      <SWRConfig value={{ fetcher }}>
        <BooksTable search={'example'} />
      </SWRConfig>
    )
  })

  it('renders the component showing an error message', () => {
    const fetcher = () => {
      throw new Error('error')
    }
    render(
      <SWRConfig value={{ fetcher }}>
        <BooksTable search={'example'} />
      </SWRConfig>
    )
    const alert = screen.queryByTestId('alert-msg')
    expect(alert).toBeInTheDocument()
  })
})
