/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import AppLayout from '~/components/layout'



function Page() {

    const router = useRouter();
  const { title } = router.query;



  return (
   <AppLayout  auth = {true}>
   
   <div className='max-w-5xl mb-8 mx-auto'>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {title}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Once upon a time, in a far-off land, there was a kingdom that faced a major problem: a poor internet connection. The citizens were frustrated with the slow and unreliable service, which affected their daily lives and businesses.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        The Government's Plan
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The government realized the importance of a fast and stable internet connection for the progress of the kingdom. They came up with{" "}
        <a
          href="#"
          className="font-medium text-primary underline underline-offset-4"
        >
          an ambitious plan
        </a>
        : to improve and expand the internet infrastructure across the entire kingdom.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        "Access to reliable internet is crucial for education, innovation, and economic growth. It's time to invest in our digital future," they proclaimed.
      </blockquote>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        The Internet Expansion Project
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The government allocated funds and resources to upgrade the existing internet infrastructure and install high-speed broadband connections in every home and business. They implemented the following plans to ensure widespread access:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>1st phase: Upgrading existing networks and improving bandwidth.</li>
        <li>2nd phase: Extending coverage to rural areas and remote regions.</li>
        <li>3rd phase: Introducing fiber optic cables for lightning-fast speeds.</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        As a result of these efforts, the citizens experienced a significant improvement in their internet connection quality. They could now browse the web, stream videos, and communicate seamlessly with the world.
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        The Digital Transformation
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        With the upgraded internet infrastructure in place, the kingdom witnessed a digital revolution. People embraced online education, remote work, e-commerce, and various digital services. The economy thrived, and innovation soared.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The government also launched initiatives to promote digital literacy and provide technical support to ensure that everyone could make the most of the improved internet connection.
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        A Connected Kingdom
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The citizens of the kingdom, enjoying the benefits of a reliable internet connection, felt empowered and connected to the world like never before. They used technology to bridge gaps, share knowledge, and foster collaboration.
      </p>
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                Internet Reliability
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                Digital Opportunities
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Unstable
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Limited
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Moderate
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Expanded
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Reliable
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Abundant
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The government, witnessing the positive impact of the improved internet connection, celebrated the success of their initiative. The kingdom prospered, and its people enjoyed the benefits of a connected and digitally empowered society.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The moral of the story is: invest in a reliable internet connection to unlock endless possibilities and pave the way for progress in the digital age.
      </p>
    </div>
   </AppLayout>
  )
}

export default Page