import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '../../util/matchMedia'
import BookInformation from './BookInformation'

describe('BookInformation', () => {
  it('renders the component', async () => {
    render(
      <BookInformation
        book={{
          title: 'some title',
          covers: [123],
          description: 'some description',
          first_publish_date: '1999',
          authors: [{ author: { key: 'some author' } }],
          subjects: ['banana', 'orange'],
        }}
      />
    )

    const description = screen.getByText('some description')
    expect(description).toBeInTheDocument()
    const date = screen.getByText('1999')
    expect(date).toBeInTheDocument()
    const tag = screen.getByText('banana')
    expect(tag).toBeInTheDocument()
  })
})
