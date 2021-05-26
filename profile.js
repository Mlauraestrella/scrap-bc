const scrapingProfile = () => {

    const getContactProfile = async (type) => {
        const {
            name: nameProf,
            resume: resumeProf,
            country: countryProf,
            email: emailProf,
            phone: phoneProf,
            buttonSeeMore: buttonSeeMoreProf,
            buttonCloseSeeMore: buttonCloseSeeMoreProf
        } = contactSelectors.profile[type];
    
        await scrollElement('body')
        const name = document.querySelector(nameProf)?.innerText;
        const resume = document.querySelector(resumeProf)?.innerText;
        const country = document.querySelector(countryProf)?.innerText;
    
        const buttonSeeMore = await waitSelector(buttonSeeMoreProf)
        if(buttonSeeMore){
            buttonSeeMore.click()
            const buttonClosePopUp = await waitSelector(buttonCloseSeeMoreProf)
            const email = document.querySelector(emailProf)?.innerText;
            const phone = document.querySelector(phoneProf)?.innerText;
            buttonClosePopUp.click()
            return {name, resume, country, email, phone}
        }
    
        return {name, resume, country}
    
    }

    const getProfile = async () => {
        let profile = null;
        for(let i=0;i<contactSelectors.profile.length;i++){
            profile = contactSelectors(i);
            if(profile!==null) break;
        }
        pre.innerText = JSON.stringify(profile, null, 1);
    }
    getProfile()
}
scrapingProfile()