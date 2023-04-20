import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import { SWRConfig } from 'swr'
import '../../util/matchMedia'
import AuthorDetail from './AuthorDetail'

describe('AuthorDetail', () => {
  it('renders the component', async () => {
    const fetcher = () => ({
      name: 'the author',
      bio: 'some random bio',
    })

    await act(async () =>
      render(
        <SWRConfig value={{ fetcher }}>
          <AuthorDetail id='id' />
        </SWRConfig>
      )
    )

    const name = screen.getByText('the author')
    expect(name).toBeInTheDocument()
    const bio = screen.getByText('some random bio')
    expect(bio).toBeInTheDocument()
  })

  it('renders the an error message', async () => {
    const fetcher = () => {
      throw new Error('error')
    }

    await act(async () =>
      render(
        <SWRConfig value={{ fetcher }}>
          <AuthorDetail id='someid' />
        </SWRConfig>
      )
    )

    const msg = screen.getByTestId('error-msg-author')
    expect(msg).toBeInTheDocument()
  })
})
