import React, { useState } from 'react'
import CommentInput from '../comment/CommentInput'
import Comment from '../comment/Comment'
import { VscBell, VscBellDot } from 'react-icons/vsc'
import styles from './PostDetails.module.scss'
import AvatarButton from '../buttons/AvatarButton'
import Tag from '../hashtag/Tag'
import Button from '../buttons/Button'

const tagsMockData = [
  {
    id: 1,
    name: 'LPS',
    color: '#32a896',
    label: '#LPS',
  },
  {
    id: 2,
    name: 'SPS',
    color: '#89d60e',
    label: '#SPS',
  },
  {
    id: 3,
    name: 'Austin Reefer',
    color: '#ec930e',
    label: '#Austin-Reefer',
  },
]

const PostDetails = () => {
  const [isSubscribed] = useState(false)

  return (
    <div className="overflow-hidden text-gray-200 rounded bg-ebonyClay-600">
      <div className="aspect-h-2 aspect-w-5">
        <img
          className="object-cover"
          src="https://www.hakaimagazine.com/wp-content/uploads/header-vr-coral-beauty.jpg"
        />
      </div>
      <div className="p-4">
        <div className="my-4">
          <h1 className="text-4xl font-bold tracking-wide">SPS REEF</h1>
        </div>
        <div className="flex space-x-2">
          {tagsMockData.map(tag => (
            <Tag tag={tag} />
          ))}
        </div>
        <div className="flex items-center my-6">
          <AvatarButton size="medium" />
          <div className="ml-2 space-x-2">
            <span className="font-semibold">Scott Tang</span>
            <span className="text-xs opacity-60">10 April 2021</span>
            <span>-</span>
            <span className="text-xs opacity-60">4 min read</span>
          </div>
        </div>
        <div className="mt-4">
          <div className={styles.postContents}>
            <h1>Step 1: Defining the project</h1>
            <p>
              The first step when planning a programming project is to define
              it. When I am defining the project I ask myself these 4 questions:
              What is the project? What is the MVP (Minimal Viable Product)?
              What are the nice to haves? When will the project be complete?
              Example project definition To give a simple example, let's say we
              are going to build a calculator app we would have a basic project
              definition like below. Calculator app project What is the project?
              - The calculator project is a project to build a calculator that
              is accessible in a web browser. The project is going to be solved
              using HTML, CSS and JavaScript. It will allow users to input
              numbers and calculate the results of those numbers based on the
              arithmetic operation they choose. What is the MVP? - The minimal
              viable product is a calculator that renders in a web browsers that
              can perform addition, subtraction, multiplication and division
              operations based on a users input and show the user the result of
              that equation. What are the nice to haves? - The nice to haves for
              this project are styling the calculator, taking keyboard presses
              as input not just users clicking buttons and adding higher order
              operations like 'to the power of x'. When will the project be
              complete? - The project will be complete once all the MVP features
              have been implemented and the calculator has been styled. The
              above definition is simple and straight forward. If my Mum picked
              it up she would understand what the project is about. She would
              understand because it tells you what the project is, the MVP
              features you must build, the nice to have features and when it
              will be complete. By defining the project you make a project less
              intimidating. Once you have the project definition you can begin
              the next step. Step 2: Creating the workflow The next step is the
              simplest. Usually this step can be combined with step 3. But, just
              for now we are going to look at it here as a separate step so that
              I can show you how to set up a very basic workflow for your own
              projects. Once you have done it once, it can be a default step for
              the rest of your projects. You first want to use something like
              Trello a free tool to manage projects. To set up our Kanban board
              we want to create 4 columns. TODO DOING DONE BUGS / NOT SURE HOW
              TO DO
            </p>
            <h1>Another Title</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              ullam in ipsam libero illum accusantium excepturi? Id, saepe vel
              deleniti, debitis ut cumque natus voluptatem reprehenderit,
              tenetur fugit praesentium dicta!
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 mb-4 border-t border-ebonyClay-300">
        <div className="flex place-content-between">
          <h1 className="text-2xl font-semibold">Discussion (3)</h1>
          <div>
            <Button
              buttonStates={{ disabled: isSubscribed }}
              size="medium"
              buttonType={'secondary'}
            >
              {isSubscribed ? (
                <>
                  <span className="text-sm font-semibold tracking-tight">
                    UNSUBSCRIBED
                  </span>
                  <VscBellDot />
                </>
              ) : (
                <>
                  <span className="text-sm font-semibold tracking-tight">
                    SUBSCRIBE
                  </span>
                  <VscBell />
                </>
              )}
            </Button>
          </div>
        </div>
        <div className="">
          <div className="mt-8">
            <CommentInput />
          </div>
          <div className="mt-5">
            <Comment isLiked />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails
