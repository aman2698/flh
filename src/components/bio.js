import React from 'react'

const Bio = () => {
    return (
        <div id='bio' className='tw-grid tw-mx-8 min-[900px]:tw-mx-56 tw-my-10'>
          <div className='tw-columns-1 '>
            <div className='tw-font-sans tw-font-bold tw-text-2xl underline-small ' style={{'marginBottom':'15px','textTransform':'uppercase'}}>Bio</div>
            <div className='tw-font-sans tw-font-normal min-[900px]:tw-text-2xl tw-text-lg'>
            Renowned Makeup Artist and Hair Specialist, Florian Hurel is one of the most acclaimed, followed and influential Makeup and Hair Artist is India and most important known for creating and recreating a flawless version of any individual he gets his hands on!!! Worked widely on a variety of projects including Editorial Giants such as Harper’s Bazaar, Vogue, Elle, Grazia, Femina and Red carpet events such as Cannes , IFFA etc
            </div>
            <br/>
            <div className='tw-font-sans tw-font-normal min-[900px]:tw-text-2xl tw-text-lg'>
            Florian is also a part of Bollywood blockbuster hit Movies such as The Sky is Pink (Priyanka Chopra), Zero (Katrina Kaif), and Fanne Khan (Aishwarya Rai Bachchan), and serving as a key advisor and a Hair specialist to clients such as Henkel, Unilever, Marico, Dabur, and Bajaj, etc.
            </div>

          </div>
        </div>
    )
}

export default Bio