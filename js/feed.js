let url = 'https://www.lianatech.com/resources/blog.rss';

const feed_list = document.querySelector('#feed_list');
  feednami.load(url)
  .then(feed => {
    feed_list.value = ''
    for(let entry of feed.entries){
        let div = document.createElement('div');
        const time = entry.date;
        const time_split = time.split("T")[0];

        // Split the time into year, month & date
        const [year, month, date] = time_split.split("-");

        div.innerHTML =
        `
        <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
                <div>
                    ${entry.enclosures.length === 0 ? "" : 
                    `<img src="${entry.enclosures[0].url}" class="img-fluid border-bottom" alt="logo" style='height: 100%; width: 100%; object-fit: contain'></img>`
                    }
                </div>
                <div class="card-body">
                    <h6 class="card-subtitle my-2 mx-3 text-muted fs-6">${date}.${month}.${year}</h6>
                    <a href="${entry.link}" class="nav-link"><div class="fs-4 text-dark" style="line-height: 1.2; text-decoration: none;">${entry.title}</div></a>
                    <p class="my-2 mx-3 card-text fs-5s " style="line-height: 1.2;">${(entry.summary === null ? "" : entry.summary)}</p>
                </div>
            </div>
        </div>
        `;
        feed_list.appendChild(div);
    }
  });

// <div class="col">
//   <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
//       <div class="card-body">
//           <h6 class="card-subtitle my-2 mx-3 text-muted fs-6">${date}.${month}.${year}</h6>
//           <a href="${entry.link}" class="nav-link"><div class="fs-4 text-dark" style="line-height: 1.2; text-decoration: none;">${entry.title}</div></a>
//           <p class="my-2 mx-3 card-text fs-5s " style="line-height: 1.2;">${(entry.summary === null ? "" : entry.summary)}</p>
//       </div>
//   </div>
// </div>