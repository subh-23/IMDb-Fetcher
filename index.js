const puppeteer = require('puppeteer');
const prompt = require("prompt-sync")({ sigint: true });
const url = prompt("Please Enter a valid url ");
const num = prompt("Please Enter no of elementys ");

//taking all title tags, and push it to the array
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`${url}`);
    //function for fetching individual link
    const grabHref = await page.evaluate(() => {
        const url = document.querySelectorAll(".lister-list .titleColumn a")
        var array = [];
        //taking all movie links at a time
        url.forEach((tag) => {
            {
                const href = tag.getAttribute("href")
                array.push(`https://www.imdb.com/${href}`);
            }
        });
        return array
    })
    await browser.close();
    var finalarr = []
    //taking n number of elements in finalArr from all
    for (let i = 0; i < num; i++) {
        finalarr.push(grabHref[i])
    }

    const newArr = []

    for (let i = 0; i < finalarr.length; i++) {
        //opening browser
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(finalarr[i]);
        // scrap title
        const grabTitle = await page.evaluate(() => {
            const url = document.querySelector(".sc-b73cd867-0.eKrKux")
            return url.innerText
        })
        //scrap release date
        const grabReleaeDate = await page.evaluate(() => {
            const url = document.querySelector(".sc-8c396aa2-2.itZqyK")
            return url.innerText
        })
        //sccrap imdb rating
        const grabImdbRating = await page.evaluate(() => {
            const url = document.querySelector(".sc-7ab21ed2-1.jGRxWM")
            return url.innerText
        })
        //scrap summary
        const grabSummary = await page.evaluate(() => {
            const url = document.querySelector(".sc-16ede01-0.fMPjMP")
            return url.innerText
        })
        //scrap duration
        const grabDuration = await page.evaluate(() => {
            const url = document.querySelector(".sc-94726ce4-3.eSKKHi li:nth-child(3)")
            return url.innerText
        })
        //scrap genre sc-7ab21ed2-1 jGRxWM
        const grabGenre = await page.evaluate(() => {
            const url = document.querySelector(".ipc-inline-list.ipc-inline-list--show-dividers.ipc-inline-list--inline.ipc-metadata-list-item__list-content.base")
            return url.innerText
        })


        //push it to the array as a json format
        newArr.push({
            "Title": grabTitle,
            "movie_release_year": grabReleaeDate,
            "imdb_rating": grabImdbRating,
            "summary": grabSummary,
            "duration": grabDuration,
            "awards": grabGenre
        })

        // await page.screenshot({ path: `example${i + 1}.png` });
        await browser.close();
    }

    for (var i = 0; i < newArr.length; i++) {
        console.log(newArr[i])
    }

})();



