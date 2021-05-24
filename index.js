import React, { useState, useEffect } from 'react';

let btnscrap = document.getElementById('scrap-profile')

btnscrap.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab !== null) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: scrapingProfile,
    });
  }
})

const scrapingProfile = () => {
  const wait = function (milliseconds) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, milliseconds);
    });
  };


  const elementNameProfile = document.querySelector("div.ph5.pb5 > div.display-flex.mt2 ul li")
  const elementNameTitle = document.querySelector("div.ph5.pb5 > div.display-flex.mt2 h2")
  const name = elementNameProfile ? elementNameProfile.innerText : '';
  const title = elementNameTitle ? elementNameTitle.innerText : '';
  wait(2000)
  const elementMoreResume = document.getElementById('line-clamp-show-more-button')
  if (elementMoreResume) elementMoreResume.click();
  const elementResume = document.querySelector('section.pv-about-section > p')
  const resume = elementResume ? elementNameTitle.innerText : '';
  const elementEducation = document.querySelector("div.ember947 > education-section ul li")
  const education = elementEducation ? elementEducation.innerText : "";
  const elementJobs = document.querySelector("div.ember910 > experience-section ul.pv-profile-section__section-info")
  const jobs = elementJobs ? elementJobs.innerText : "";


  console.log({ name, title, resume, education, jobs });
}

const waitTime = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const time = setTime(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(time);
  }, []);

  return (
    <div>
      <header>
        Loading {seconds} seconds.
      </header>
    </div>
  );
};

export default waitTime;