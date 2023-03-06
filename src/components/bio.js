import React from 'react'

const Bio = () => {
    return (
        <div id='bio' className='tw-grid tw-mx-8 min-[900px]:tw-mx-56 tw-my-10'>
          <div className='tw-columns-1 '>
            <div className='tw-font-sans tw-font-bold tw-text-2xl underline-small ' style={{'marginBottom':'15px','textTransform':'uppercase'}}>Bio</div>
            <div className='tw-font-sans tw-font-normal min-[900px]:tw-text-2xl tw-text-lg'>
            Florian Hurel is a renowned hair and makeup artist with over a decade of experience in the beauty industry. He is known for his exceptional skills in creating flawless and natural-looking makeup, and his ability to enhance a person's beauty without overpowering their features.<br/>
Florian began his career in Paris, where he honed his skills working with some of the most prestigious names in the fashion industry. He has since established himself as a go-to artist for high-end editorial shoots, advertising campaigns, and red carpet events.<br/>
Florian's unique approach to makeup artistry is deeply rooted in his love for nature and his belief that beauty should always come from within. He understands that every person is unique, and strives to create looks that reflect their individuality and enhance their natural beauty.<br/>
In addition to his work in the beauty industry, Florian is also a respected educator and mentor. He has trained and inspired countless aspiring makeup artists through his masterclasses, workshops, and one-on-one sessions.<br/>
Florian's passion for beauty is matched only by his dedication to his clients. He takes the time to understand their needs, preferences, and lifestyle, and works closely with them to create looks that exceed their expectations. Whether it's for a photo shoot, a wedding, or a special event, Florian's clients know they can count on him to deliver exceptional results every time.<br/>

            </div>
            {/* <br/>
            <div className='tw-font-sans tw-font-normal min-[900px]:tw-text-2xl tw-text-lg'>
            Florian is also a part of Bollywood blockbuster hit Movies such as The Sky is Pink (Priyanka Chopra), Zero (Katrina Kaif), and Fanne Khan (Aishwarya Rai Bachchan), and serving as a key advisor and a Hair specialist to clients such as Henkel, Unilever, Marico, Dabur, and Bajaj, etc.
            </div> */}

          </div>
        </div>
    )
}

export default Bio