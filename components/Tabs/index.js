// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicElement = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        // deal with the response data in here
        let topicobject = response.data;
        //console.log(topicobject);
        for (const item in topicobject) {
            //console.log(topicobject[item]);
            topicobject[item].forEach(topic => {
                //console.log(topic)
                topicElement.appendChild(createTabComponent(topic));
            });
        }
    })
    .catch( err => {
        // deal with the error in here
        console.log(`Error: ${err}`);
    })

function createTabComponent(topic) {

    let tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = topic;

    return tabDiv;
}