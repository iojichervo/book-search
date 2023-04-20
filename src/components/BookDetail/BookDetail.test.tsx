import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import { SWRConfig } from 'swr'
import '../../util/matchMedia'
import BookDetail from './BookDetail'

describe('BookDetail', () => {
  it('renders the component', async () => {
    const fetcher = () => ({
      title: 'some title',
      covers: [123],
      description: 'some description',
      first_publish_date: '1999',
      authors: [{ author: { key: 'some author' } }],
      subjects: ['banana', 'orange'],
    })

    await act(async () =>
      render(
        <SWRConfig value={{ fetcher }}>
          <BookDetail id='id' />
        </SWRConfig>
      )
    )

    const titles = screen.getAllByText('some title')
    expect(titles.length).toBe(2) // breadcrumb and title
    const img = screen.getByTestId('book-img')
    expect(img).toBeInTheDocument()
  })

  it('renders the an error message', async () => {
    const fetcher = () => {
      throw new Error('error')
    }

    await act(async () =>
      render(
        <SWRConfig value={{ fetcher }}>
          <BookDetail id='someid' />
        </SWRConfig>
      )
    )

    const msg = screen.getByTestId('error-msg-book-detail')
    expect(msg).toBeInTheDocument()
  })
})
