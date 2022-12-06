module.exports = function getCampaignImageHTML({
  title,
  categories,
  creatorName,
  description,
  thumbnailUrl,
  startDate,
  endDate,
  goal,
  goalValue,
  numInteractions,
  campaignUrl,
}) {
  return `<html>
  <head>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap">
  <link as="style" href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
      body {
        font-family: Jost, sans-serif;
        width: 530px;
        height: 1050px;
        padding: 0px;
        margin: 0px;
        background-color: #F5F7FA;
        background-image: url("https://firebasestorage.googleapis.com/v0/b/interact2002.appspot.com/o/bg-img.png?alt=media&token=7f7f6e6c-554e-4fd4-a8cc-39861afde5e2");
        background-repeat: no-repeat;
        box-sizing: border-box;
      }
      .div {
        display: flex;
        padding: 30px;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        max-width: 530px;
        height: 100%;
        box-sizing: border-box;
      }
      .bottom-section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
      .video-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 240px;
        width: 440px;
        margin-top: 30px;
        margin-bottom: 30px;
        object-fit: cover;
        overflow: clip;
        background-color: black;
        border-radius: 5px;
      }
      .image {
        object-fit: contain;
        object-position: center;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }
      .campaign-details {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .campaign-title {
        display: flex;
        flex-direction: column;
      }
  
      .column {
        display: flex;
        flex-direction: column;
        line-height: normal;
        margin-left: 0px;
      }
  
      .div-8 {
        color: rgba(77, 70, 87, 1);
        font-size: 40px;
        letter-spacing: 0%;
        text-align: left;
        font-family: "Jost", sans-serif;
        font-weight: 600;
      }
      .column-2 {
        display: flex;
        flex-direction: column;
        line-height: normal;
        margin-left: 5px;
      }
  
      .div-9 {
        color: rgba(112, 103, 126, 1);
        font-size: 20px;
        text-align: left;
        font-family: "Jost", sans-serif;
      }
      .this-is-a-campaign-description {
        margin-top: 13px;
        line-height: 110%;
        color: rgba(61, 54, 73, 1);
        font-size: 20px;
        text-align: left;
        font-family: "Jost", sans-serif;
      }
      .div-10 {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 13px;
        padding-top: 9px;
        padding-bottom: 9px;
      }
      .div-11 {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 4px;
        padding-right: 12px;
        padding-bottom: 4px;
        padding-left: 12px;
        border-color: rgba(120, 47, 238, 1);
        border-width: 1px;
        border-radius: 2px 11px;
        border-style: solid;
        color: rgba(120, 47, 238, 1);
        font-size: 14px;
        letter-spacing: 0%;
        text-align: left;
        font-family: "Jost", sans-serif;
        margin-right: 10px;
      }
      .goal {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        margin: top 30px;
      }
      .goal-container {
        display: flex;
        flex-direction: column;
      }
      .div-14 {
        display: flex;
      }
  
      .column-3 {
        display: flex;
        flex-direction: column;
        line-height: normal;
        margin-left: 0px;
      }
  
      .i-will-upgrade-my-pc-setup-to {
        color: rgba(61, 54, 73, 1);
        font-size: 30px;
        line-height: 110%;
        text-align: left;
        font-family: "Jost", sans-serif;
      }
      .column-4 {
        display: flex;
        flex-direction: column;
        line-height: normal;
        margin-left: 20px;
      }
      .div-15 {
        display: flex;
        height: 0px;
        border-color: rgba(201, 197, 207, 1);
        border-width: 1px;
        border-style: solid;
      }
      .column-5 {
        display: flex;
        flex-direction: column;
        line-height: normal;
        margin-left: 20px;
      }
      .div-16 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-right: 15px;
        padding-left: 15px;
        border-left: 1px solid #c9c5cf;
      }
      .div-17 {
        color: rgba(112, 103, 126, 1);
        font-size: 24px;
        letter-spacing: 0%;
        text-align: left;
        font-family: "Jost", sans-serif;
        font-weight: 500;
      }
      .div-18 {
        margin-top: 6px;
        color: rgba(120, 47, 238, 1);
        font-size: 40px;
        letter-spacing: 0%;
        text-align: left;
        font-family: "Jost", sans-serif;
        font-weight: 500;
      }
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background: #ffffff;
        box-shadow: 0px 0px 27px rgba(120, 47, 238, 0.15);
        border-radius: 14px;
      }
  
      .column-6 {
        display: flex;
        flex-direction: column;
        line-height: normal;
        margin-left: 0px;
      }
  
      .enter-for-a-chance-to-win-one {
        color: rgba(112, 103, 126, 1);
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        font-family: "Jost", sans-serif;
      }
      .column-7 {
        display: flex;
        flex-direction: column;
        line-height: normal;
      }
  
      .div-21 {
        color: rgba(120, 47, 238, 1);
        font-size: 26px;
        line-height: 40px;
        text-align: center;
        font-family: "Jost", sans-serif;
        margin-top: 5px;
        margin-bottom: 5px;
      }
      .dates {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 20px;
      }
      .item-name {
        color: rgba(112, 103, 126, 1);
        font-size: 24px;
        letter-spacing: 0%;
        text-align: left;
        font-family: "Jost", sans-serif;
        font-weight: 500;
      }
      .item-value {
        color: rgba(61, 54, 73, 1);
        font-size: 22px;
        letter-spacing: 0%;
        text-align: left;
        font-family: "Jost", sans-serif;
      }
      .div-26 {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
      .div-28 {
        color: rgba(61, 54, 73, 1);
        font-size: 24px;
        letter-spacing: 0%;
        text-align: left;
        font-family: "Jost", sans-serif;
      }
      .interact-full-only-heart-logo {
        display: flex;
        position: relative;
        min-width: 20px;
        min-height: 20px;
        border-radius: 5px;
      }
      .image-2 {
        object-fit: cover;
        object-position: center;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }
      .logo {
       width: 100%;
       display: flex;
       flex-direction: column;
       align-items: center;
       padding-top: 20px;
      }
    </style>
  </head>
  
  <body>
    <div class="div">
        <div class="campaign-details">
          <div class="campaign-title">
            <div class="column">
              <div class="div-8">${title}</div>
            </div>
            <div class="column-2">
              <div class="div-9">by ${creatorName}</div>
            </div>
          </div>
  
          <div class="this-is-a-campaign-description">
            ${description}
          </div>
          <div class="div-10">
          ${categories?.map((category) => `<div class="div-11">${category}</div>`).join("")}
          </div>
        </div>
        <div class="video-container">
          <img src="${thumbnailUrl}" />
        </div>
      <div class="bottom-section">
        <div class="dates">
          <div class="div-26">
            <div class="item-name">Starts</div>
            <div class="item-value">${startDate}</div>
          </div>
          <div class="div-26">
            <div class="item-name">Ends</div>
            <div class="item-value">${endDate}</div>
          </div>
        </div>
        <div class="goal-container">
          <div class="goal">
            <div class="div-14">
              <div class="column-3">
                <div class="i-will-upgrade-my-pc-setup-to">
                  ${goal}
                </div>
              </div>
              <div class="column-4"><div class="div-15"></div></div>
              <div class="column-5">
                <div class="div-16">
                  <div class="div-17">Goal</div>
                  <div class="div-18">$${goalValue}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="column-6">
              <div class="enter-for-a-chance-to-win-one">
                Enter for a chance to win one of ${numInteractions} interactions at
              </div>
            </div>
            <div class="column-7">
              <div class="div-21">interact.vip/${campaignUrl}</div>
            </div>
          </div>
          <div class="logo">
           <img src="https://firebasestorage.googleapis.com/v0/b/interact2002.appspot.com/o/logo.png?alt=media&token=82e94cee-c444-4740-860f-e8a85704a256" width="120px" />
          </div>
        </div>
    </div>
  </body>
 </html>`;
};
