'use client'

import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { dummy } from './data'

export type Option = {
  description: string
  key: string
  type: string
}

export default function Home() {
  const [search, setSearch] = useState('')
  const options: Option[] = dummy

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="bg-yellow-300">
          {part}
        </span>
      ) : (
        part
      ),
    )
  }

  const groupedOptions = options.reduce(
    (acc: { [key: string]: Option[] }, option) => {
      if (!acc[option.type]) {
        acc[option.type] = []
      }
      acc[option.type].push(option)
      return acc
    },
    {},
  )

  return (
    <div className="w-screen h-screen flex gap-2 p-4">
      <div className=" w-96 flex flex-col gap-2">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md h-8"
          placeholder="Search..."
        />

        {search !== '' && (
          <div className="overflow-y-auto max-h-48 border border-gray-300 p-2 bg-white">
            {Object.keys(groupedOptions).map((type) => (
              <div key={type}>
                <h2 className="text-lg font-semibold">{type}</h2>
                {groupedOptions[type].map((option, index) => {
                  const isHighlighted = option.description
                    .toLowerCase()
                    .includes(search.toLowerCase())
                  return (
                    <p
                      key={index}
                      className={`p-1 ${isHighlighted ? 'font-bold' : ''}`}
                    >
                      {highlightText(option.description, search)}
                    </p>
                  )
                })}
              </div>
            ))}
          </div>
        )}
      </div>
      <FaSearch size={32} />
    </div>
  )
}
