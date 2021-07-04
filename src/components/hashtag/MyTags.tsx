import React from 'react'
import { FaHashtag } from 'react-icons/fa'
import { VscSettings } from 'react-icons/vsc'
import UnderlineButton from '../buttons/underline-button/UnderlineButton'

const MyTags = () => {
  return (
    <div className="hidden w-40 mt-2 mr-6 text-gray-300 align-baseline min-w-max sm:flex sm:flex-col">
      <div className="flex items-center justify-between w-full mb-4 text-2xl">
        <h2 className="">My Tags</h2>
        <span>
          <VscSettings className="hover:text-primary-300 hover:cursor-pointer" />
        </span>
      </div>
      <div>
        <UnderlineButton size="medium">
          <span>
            <FaHashtag />
          </span>
          <p>SPS</p>
        </UnderlineButton>
        <UnderlineButton size="medium">
          <span>
            <FaHashtag />
          </span>
          <p>LPS</p>
        </UnderlineButton>
        <UnderlineButton size="medium">
          <span>
            <FaHashtag />
          </span>
          <p>Plant</p>
        </UnderlineButton>
        <UnderlineButton size="medium">
          <span>
            <FaHashtag />
          </span>
          <p>Lagoon</p>
        </UnderlineButton>
        <UnderlineButton size="medium">
          <span>
            <FaHashtag />
          </span>
          <p>photography</p>
        </UnderlineButton>
        <UnderlineButton size="medium">
          <span>
            <FaHashtag />
          </span>
          <p>TX Reefer</p>
        </UnderlineButton>
        <UnderlineButton size="medium">
          <span>
            <FaHashtag />
          </span>
          <p>Waterbox</p>
        </UnderlineButton>
      </div>
    </div>
  )
}

export default MyTags
