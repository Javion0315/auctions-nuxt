<template>
  <div>
      <section class="policy mainContent">
          <div class="tabs-anchor container stickyTop--normal" :class="{ 'stickyTop--hidden': !showNavbar ,'stickyTop--fixed': navbarFixed }">
            <ul class="tab_flex tab-anchor-tabs">
              <li class="tab-anchor" data-goHash="Privacy_zh" v-on:click="anchorScroll">
                <span>Privacy</span>
              </li>
              <li class="tab-anchor" data-goHash="UserTerms_zh" v-on:click="anchorScroll">
                <span>User Terms</span>
              </li>
              <!-- <li class="tab-anchor" data-goHash="BuyerTerms" v-on:click="anchorScroll">
                <span>Buyer Terms</span>
              </li>
              <li class="tab-anchor" data-goHash="SellerTerms" v-on:click="anchorScroll">
                <span>Seller Terms</span>
              </li> -->
            </ul>
          </div>

          <section class="Privacy">
            <a id="Privacy_zh" name="Privacy_zh"></a>
            <div class="container">
                <h1 class="heading-m">隱私權條款</h1>
                <p class="bold" style="text-align: center;">隱私權政策</p>
                <p style="text-align: right;">8.25.2020</p>
                <p>GemCard App 球員卡交易平台是由「卡庫股份有限公司（CardCool Co., Ltd.）」所設計與經營，為了維護並尊重個人隱私權，CardCool 公司謹分成下列八個項目聲明之：</p>
                <ol class="disc">
                    <li>適用範圍</li>
                    <li>個人資料蒐集之目的</li>
                    <li>個人資料的處理與利用</li>
                    <li>資料安全之維護</li>
                    <li>資料當事人的權利</li>
                    <li>Cookie 的使用</li>
                    <li>選取同意或不同意的影響</li>
                    <li>修訂之權利</li>
                </ol>
                
                <p>您對於下列隱私權聲明如有任何疑問，請聯絡 CardCool 公司。 </p>

                <h2 class="title-m">1. 適用範圍</h2>
                <p>CardCool 公司的隱私權聲明，僅適用於所經營的網站與 GemCard App（分成 iOS 版本與 Android 版本）。以下 GemCard App 或簡稱為 App。</p>

                <h2 class="title-m">2. 個人資料蒐集之目的</h2>
                <p>CardCool 公司為了下列目的：</p>
                <ol class="disc">
                    <li>球員卡交易服務、</li>
                    <li>國內外行銷、</li>
                    <li>客戶關係管理與服務、</li>
                    <li>履行法定或合約義務、</li>
                    <li>球員卡保險、</li>
                    <li>球員卡之收件與寄送服務、</li>
                    <li>售後服務、</li>
                    <li>抽獎活動（包含得獎者身份、贈品、…等）、</li>
                    <li>經營營業登記之項目、</li>
                    <li>組織章程所定之業務等</li>
                </ol>

                <p>依照 CardCool 公司的網站與 App 各服務之性質，可能蒐集您的姓名、生日、連絡方式（包括但不限於市內電話號碼、手機號碼、Email 地址及聯絡地址等）、服務單位、職稱、收款或付款所需之資料、IP 位址、財務和信用卡資訊、登錄名稱、密碼及其他得以直接或間接識別使用者身分之個人資料。</p>

                <p>透過我們的網站或 App，您向我們提供的付款／收款明細資料，我們不會儲存或收集您的付款／收款明細資料。該資訊將直接提供給我們的夥伴廠商，來處理付款／收款事宜，他們對您的個人資訊的使用，將受該廠商隱私政策約束。</p>

                <p>為提升服務品質，CardCool 公司會依照網站與 App 各服務所提供之性質，記錄使用者在 CardCool 公司網站或 App 內的瀏覽活動。</p>
                <p>例如，記錄：</p>
                <ol class="disc">
                    <li>使用者的 IP 位址、</li>
                    <li>使用者端的軟硬體種類、</li>
                    <li>作業系統類型和版本、</li>
                    <li>瀏覽器類型和版本、</li>
                    <li>時區設置、</li>
                    <li>何時造訪網站或 App、</li>
                    <li>所點選的網頁與其停留期間、 …等</li>
                </ol>

                <p>但是，這些資料僅供作 CardCool 公司進行流量分析和網路行為調查，以便於改善 CardCool 公司相關網站與 App 的服務品質。這些資料只是統計上的分析，不會和特定個人相關連。</p>

                <h2 class="title-m">3. 個人資料的處理與利用</h2>
                <p>CardCool 公司不會將個人資料提供給第三人（包括國內及國外）或移作蒐集目的以外之使用。CardCool 公司所蒐集的個人資料，僅提供給 CardCool 公司內部使用且依照蒐集之目的進行處理和利用，但下列項目為例外項目：</p>
                <ol class="disc">
                    <li>為完成網站與 App 所提供服務、</li>
                    <li>履行 CardCool 公司合約義務之必要、</li>
                    <li>協助客戶辦理保險事故出險而提供給保險人、</li>
                    <li>依照相關法令規定、</li>
                    <li>有權主管機關之命令或要求等、</li>
                </ol>
                <p>CardCool 公司不會有意收集或徵求18歲以下未成年人的個人資料。如果您是18歲以下的未成年人，請勿嘗試註冊、或以其他方式使用服務、或向我們發送任何個人資料。如果我們瞭解到我們已從18歲以下的未成年人那裡，收集了個人資料，我們將儘快刪除該資訊。</p>
                <p>在合約有效期間內以及法令所定應保存之期間內，CardCool 公司會持續保管、處理及利用相關資料。</p>

                <h2 class="title-m">4. 資料安全之維護</h2>
                <p>CardCool 公司會採用適當的資訊安全與資安管理之軟體、硬體、管理、技術及程序，維護 CardCool 公司客戶個人資料之安全。 </p>

                <h2 class="title-m">5. 資料當事人的權利</h2>
                <p>資料當事人可以請求查詢、查閱本人個人資料、或要求給予複本，但 CardCool 公司得酌收必要成本和費用。若您的個人資料有變更、或發現您的個人資料不正確，可以向 CardCool 公司要求修改或更正。</p>
                <p>當蒐集個人資料之目的消失或期限屆滿時，您可要求刪除、停止處理或利用個人資料。</p>

                <h2 class="title-m">6. Cookie 的使用</h2>
                <p>Cookie 是網站伺服器或 App，用來和使用者瀏覽器進行溝通的一種技術，它可能在使用者電腦內部儲存某些資訊。CardCool 公司網站或 App 可能會使用 Cookie 技術，以進一步提供使用者個人需求的服務。</p>
                <p>使用者可以透過瀏覽器的設定，取消、或限制此項功能，但可能因此無法使用部份網站或 App 功能。</p>

                <h2 class="title-m">7. 選取同意或不同意的影響</h2>
                <p>為了使 CardCool 公司網站或 App 可以順利提供相關服務、或順利完成相關球員卡交易，請您選擇「同意」提供各服務或球員卡交易所要求的相關個人資料，給 CardCool 公司經營的網站或 App，並同意 CardCool 公司就該個人資料進行相關服務或交易之個人資料蒐集、處理、利用及傳輸。</p>
                <p>若您需選擇「不同意」，CardCool 公司會尊重您的決定，但依照各服務之性質或條件，您可能因此無法使用該等服務或完成相關交易。</p>

                <h2 class="title-m">8. 修訂之權利</h2>
                <p>CardCool 公司有權利隨時修訂本隱私權政策、聲明及相關告知事項，並得於修訂後，公佈在 CardCool 公司網站或 App 之適當位置，不再另行個別通知。</p>
            </div>
          </section>

          <section class="Privacy">
              <a id="Privacy" name="Privacy"></a>
              <div class="container">
                  <h1 class="heading-m">Privacy Policy</h1>
                  <p>The “GemCard App” player card trading platform is designed and operated by CardCool Co., Ltd. (Hereinafter also referred to as our company). In order to maintain and respect personal privacy rights, our company would like to divide the following eight statements:</p>
                  <ol class="disc">
                      <li>Scope of application</li>
                      <li>Purpose of personal data collection</li>
                      <li>Processing and use of personal data</li>
                      <li>Maintenance of data security</li>
                      <li>Data Subject's Rights</li>
                      <li>Use of Cookies</li>
                      <li>The impact of choosing agree or disagree</li>
                      <li>Right of Amendment</li>
                  </ol>
                  
                  <p>If you have any questions about the following privacy statement, please contact our company.</p>

                  <h2 class="title-m">1. Scope of application</h2>
                  <p>Our company’s privacy statement is only applicable to the website and GemCard App it operates (divided into iOS version and Android version). Hereinafter, GemCard App or simply called App.</p>

                  <h2 class="title-m">2. Purpose of collecting personal data</h2>
                  <p> company has the following purposes:</p>
                  <ol class="disc">
                      <li>Player card transaction service,</li>
                      <li>Domestic and foreign marketing,</li>
                      <li>Customer relationship management and service,</li>
                      <li>Fulfill legal or contractual obligations,</li>
                      <li>Player card insurance,</li>
                      <li>Collection and delivery services of player cards,</li>
                      <li>After-sales service,</li>
                      <li>Lottery (including the identity of winners, gifts,... etc.)</li>
                      <li>Items of company business registration</li>
                      <li>Businesses specified in the company's articles of association</li>
                  </ol>

                  <p>According to the nature of the our company’s website and App services, it may collect your name, birthday, local phone number, mobile phone number, Email address, contact address, service unit, job title, information required for receipt or payment, IP Address, financial and credit card information, login name, password, and other personal data that can directly or indirectly identify the user's identity.</p>

                  <p>We will not store or collect the payment/receipt details that you provide to us through our website or App. This information will be directly provided to our third-party vendors to handle payment/receipt matters. Their use of your personal information will be subject to the third-party's privacy policy.</p>

                  <p>In order to improve the service quality, our company will record the user's browsing activities on the company website or App in accordance with the nature of the services provided by the website and App.</p>
                  <p>For example, it might record:</p>
                  <ol class="disc">
                      <li>The user's IP address,</li>
                      <li>The type of software and hardware on the user side,</li>
                      <li>Operating system type and version,</li>
                      <li>Browser type and version,</li>
                      <li>Time zone setting,</li>
                      <li>When to visit the website or App,</li>
                      <li>The selected webpage and its stay period,… etc.</li>
                  </ol>

                  <p>However, these data only provide our company's understanding of traffic analysis and network behavior in order to improve the service quality of our company's related websites and App. These data are only statistical analysis and will not be related to specific individuals.</p>

                  <h2 class="title-m">3. Processing and use of personal data</h2>
                  <p>Our company will not provide personal data to third parties (including domestic and foreign) or use it for purposes other than collection. The personal data collected by our company is only provided to our company for internal use and processed and used according to the purpose of the collection, but the following items are exceptions:</p>
                  <ol class="disc">
                      <li>To complete the services provided by our company website and App,</li>
                      <li>Necessary to fulfill the contractual obligations of our company,</li>
                      <li>Assist customers in handling the insurance provided to the insurer,</li>
                      <li>In accordance with relevant laws and regulations,</li>
                      <li>Orders or requirements of competent authorities, etc.</li>
                  </ol>
                  <p>Our company will not intentionally collect or solicit personal data of minors (the legal age defined in different countries is different). If you are a minor, please do not try to register, use the service in other ways, or send us any personal information. If we learn that we have collected personal data from minors, we will delete that information as soon as possible.</p>
                  <p>During the validity period of the contract and the period of time stipulated by the law, our company will continue to keep, process and use relevant data.</p>

                  <h2 class="title-m">4. Maintenance of data security</h2>
                  <p>Our company will adopt appropriate information security and management software, hardware, management, technology and procedures to maintain the security of the personal data of our company customers.</p>

                  <h2 class="title-m">5. Data Subject's Rights</h2>
                  <p>The data subject can request for inquiries, access to personal data, or for a copy, but company may charge necessary costs and fees at its discretion. If your personal information is changed or it is found that your personal information is incorrect, you can request modification or correction from our company</p>
                  <p>When the purpose of collecting personal data disappears or the time limit expires, you can request to delete, stop processing or use personal data.</p>

                  <h2 class="title-m">6. Use of Cookies</h2>
                  <p>A cookie is a technology used by a web server or app to communicate with a user's browser. It may store certain information inside the user's computer. Our company’s website or App may use cookie technology to further provide users with personalized services.</p>
                  <p>Users can cancel or restrict this function through browser settings, but may not be able to use some website or App functions.</p>

                  <h2 class="title-m">7. The impact of choosing agree or disagree</h2>
                  <p>In order to enable our company website or App to smoothly provide related services or successfully complete the relevant player card transactions, please select "Agree" to the following items:</p>
                  <ol class="disc">
                      <li>Provide relevant personal information required by each service or player card transaction to the website or App,</li>
                      <li>Our company will collect, process, use and transmit the personal data for related services or transactions.</li>
                  </ol>
                  <p>If you need to choose "Disagree", our company will respect your decision, but depending on the nature or conditions of each service, you may not be able to use these services or complete related transactions.</p>

                  <h2 class="title-m">8. Right of amendment</h2>
                  <p>Our company has the right to revise this privacy policy and statement items at any time, and after the revision, it may be published on the company's website or App in an appropriate place without separate notice.</p>
              </div>
          </section>

          <section class="UserTerms">
            <a id="UserTerms_zh" name="UserTerms_zh"></a>
            <div class="container">
                <h1 class="heading-m">會員服務條款</h1>
                <p class="bold" style="text-align: center;">卡庫公司 GemCard App 會員服務</p>
                <p class="bold" style="text-align: center;">使用條款</p>
                <p style="text-align: right;">8.24.2020</p>
                <p class="bold">歡迎您將成為 GemCard 會員</p>
                <p><span class="bold">GemCard App </span>係由 "<span class="bold">卡庫（ CardCool ）</span> 股份有限公司"（以下稱本公司）所設計與經營。所有申請使用 GemCard App 會員服務之使用者以下稱 <span class="bold">會員</span>) 都應該詳細閱讀本使用條款。</p>
                <p>您造訪 GemCard App（以下稱 App ），即表示您已閱讀、理解、並同意接受所有這些使用條款的約束。如果您不同意所有這些使用條款，則明確禁止您使用 App，並且必須立即停止使用。若您未滿二十歲，應於使用本服務前，將本服務條款請您的法定代理人（家長）或監護人閱讀、瞭解並同意本約書之所有內容，才可以註冊及使用本服務。當您使用本服務時，則視為您的家長（或監護人）已經閱讀、瞭解並同意本服務條款之所有內容及其後之修改變更。</p>
                <p>這些使用條款訂立的目的，是為了保護會員服務的提供者以及所有使用者的利益，並構成兩造之間的契約。</p>
                <p>本條款分成下列九個項目：</p>
                <ol class="disc">
                    <li>智慧財產權</li>
                    <li>帳號、密碼、責任</li>
                    <li>資料的隱私權</li>
                    <li>使用者行為規範</li>
                    <li>責任限制</li>
                    <li>服務暫停或中斷</li>
                    <li>終止服務</li>
                    <li>修改本使用條款的權利</li>
                    <li>準據法及管轄權</li>
                </ol>

                <h2 class="title-m">智慧財產權</h2>
                <p>除非另有說明，否則本 App 是我們卡庫公司的專有財產，並且本 App 上的所有原始程式碼、資料庫、功能、軟體、網頁設計、音訊、視頻、文本、照片和圖形、以及商標，皆歸我們所有或控制、或由我們授權使用。除本使用條款中明確規定的內容外，不得複製、匯總、重新發佈、上載、發佈、公開顯示、編碼、翻譯、傳輸、分發、出售、許可。未經我們卡庫公司事先明確的書面許可，不得用於任何商業目的。</p>

                <h2 class="title-m">帳號、密碼、責任</h2>
                <ol>
                    <li>在使用會員服務以前，使用者必須經過完整且正確的註冊手續。</li>
                    <li>在註冊過程中，您可以自行選擇自己的使用者名稱和密碼。</li>
                    <li>在登入 GemCard App 時，需輸入您的使用者名稱和密碼。</li>
                    <li>在使用會員服務的過程中，您必須為這個使用者名稱和密碼所進行的所有行為負責。</li>
                </ol>

                <h2 class="title-m">資料的隱私權</h2>
                <li>本公司會尊重且保護每一位會員的隱私權。</li>
                <li>有關細節，請參閱本公司的隱私權政策。</li>

                <h2 class="title-m">使用者行為規範</h2>
                <li>任何未經本公司事前授權的商業行為，都是被禁止的。</li>
                <li>會員必須遵守相關法令規範。</li>

                <h2 class="title-m">責任限制</h2>
                <p>本公司所提供的會員服務，僅提供會員參考用，如有造成之任何直接或間接之損害，本公司皆不負任何責任。</p>

                <h2 class="title-m">服務暫停或中斷</h2>
                <p>本公司因故可能暫停或中斷公司所提供服務之全部或一部份，如果造成使用者任何直接或間接之損害，本公司皆不負任何責任。</p>

                <h2 class="title-m">終止服務</h2>
                <p>會員如果違反了本使用條款，本公司保留隨時暫時停止提供服務、或終止提供服務之權利，會員不可以因而要求任何賠償或補償。</p>

                <h2 class="title-m">修改本使用條款的權利</h2>
                <ol>
                    <li>本公司保留隨時可以修改本會員服務使用條款的權利。</li>
                    <li>修改後的 GemCard App 會員服務使用條款，將公佈在 CardCool 公司網站或 GemCard App，不會另外個別通知使用者。</li>
                </ol>

                <h2 class="title-m">準據法及管轄權</h2>
                <ol>
                    <li>本約定條款之解釋、補充及適用，皆以中華民國之法令為準據法。</li>
                    <li>因本約定條款所發生之訴訟，以台灣台北地方法院為第一審管轄法院。</li>
                </ol>
            </div>
          </section>

          <section class="UserTerms">
              <a id="UserTerms" name="UserTerms"></a>
              <div class="container">
                  <h1 class="heading-m">GemCard App Member Service Terms of use</h1>
                  <p class="bold">You are welcome to become a GemCard member.</p>
                  <p><span class="bold">GemCard App </span>is designed and operated by "<span class="bold">CardCool Co.</span>, Ltd." (Hereinafter referred to as our company). All users who apply for GemCard App membership service (hereinafter referred to as <span class="bold">members</span>) should read these terms of use in detail.</p>
                  <p>Your visit to GemCard App (hereinafter referred to as <span class="bold">App</span>) means that you have read, understood, and agree to be bound by all these terms of use. If you do not agree to all these terms of use, you are expressly prohibited from using the App, and you must stop using it immediately.</p>
                  <p>If you are a minor (the legal age defined in different countries is different), you should ask your legal representative (parent) or guardian to read, understand and agree to all the contents of these terms of use before using this service. After that, you can register and use this service. When you use this service, it is deemed that your parent (or guardian) has read, understood and agreed to all the contents of these terms of use and subsequent modifications.</p>
                  <p>The purpose of these terms of use is to protect the interests of service providers and all users, and constitute a contract between the two parties.</p>
                  <p>This clause is divided into the following nine items:</p>
                  <ol class="disc">
                      <li>Intellectual property rights</li>
                      <li>Account number, password, and responsibility</li>
                      <li>Data privacy</li>
                      <li>User code of conduct</li>
                      <li>Limitation of Liability</li>
                      <li>Service suspension or interruption</li>
                      <li>Termination of service</li>
                      <li>Right to modify these terms of use</li>
                      <li>Governing law and jurisdiction</li>
                  </ol>

                  <h2 class="title-m">Intellectual property rights</h2>
                  <p>Unless otherwise specified, this App is the exclusive property of our company, and all source code, databases, functions, software, web design, audio, video, text, photos, graphics, and trademarks on this App, are owned or controlled by us, or authorized to use by us. Except for the content clearly stipulated in these terms of use, it is not allowed to copy, aggregate, republish, upload, publish, publicly display, encode, translate, transmit, distribute, sell, or license. It shall not be used for any commercial purpose without the prior express written permission of our company.</p>

                  <h2 class="title-m">Account number, password, and responsibility</h2>
                  <ol>
                      <li>Before using the membership service, users must complete the registration procedures correctly.</li>
                      <li>During the registration process, you can choose your own username and password.</li>
                      <li>When logging in to GemCard App, you need to enter your username and password.</li>
                      <li>In the process of using the membership service, you must be responsible for all actions performed by this user name and password.</li>
                  </ol>

                  <h2 class="title-m">Data privacy</h2>
                  <li>The company will respect and protect the privacy of every member.</li>
                  <li>For details, please refer to our company's privacy policy.</li>

                  <h2 class="title-m">User Code of Conduct</h2>
                  <li>Any commercial activity without the prior authorization of the company is prohibited.</li>
                  <li>Members must abide by relevant laws and regulations.</li>

                  <h2 class="title-m">Limitation of Liability</h2>
                  <p>The member services provided by the company are only for members' reference. If any direct or indirect damage is caused, the company will not be liable.</p>

                  <h2 class="title-m">Service suspension or interruption</h2>
                  <p>The company may suspend or interrupt all or part of the services provided by the company for some reason. If any direct or indirect damage is caused to the user, the company shall not be liable.</p>

                  <h2 class="title-m">Termination of service</h2>
                  <p>If a member violates these terms of use, the company reserves the right to temporarily suspend the provision of services or terminate the provision of services at any time, and members cannot claim any compensation.</p>

                  <h2 class="title-m">Right to modify these terms of use</h2>
                  <ol>
                      <li>The company reserves the right to modify the terms of use of this member service at any time.</li>
                      <li>The revised GemCard App membership service terms of use will be published on the company website or GemCard App, and users will not be notified separately.</li>
                  </ol>

                  <h2 class="title-m">Governing law and jurisdiction</h2>
                  <ol>
                      <li>The interpretation, supplementation and application of the terms of this agreement shall be governed by the laws and regulations of the Republic of China.</li>
                      <li>For litigation arising from the terms of this agreement, the Taipei District Court of Taiwan shall be the court of first instance jurisdiction.</li>
                  </ol>
              </div>
          </section>
          
          <!-- 等資料齊全再開啟 -->
          <!-- <section class="BuyerTerms">
              <a id="BuyerTerms"></a>
              <div class="container">
                  <h1 class="heading-m">Buyer Terms</h1>
                  <p>PWCC Marketplace, LLC (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://www.pwccmarketplace.com including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this Privacy Policy carefully.</p>
                  <p>We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Revised” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.</p>
                  <h2 class="title-m">COLLECTION OF YOUR INFORMATION</h2>
                  <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              </div>
          </section>

          <section class="SellerTerms">
              <a id="SellerTerms"></a>
              <div class="container">
                  <h1 class="heading-m">Seller Terms</h1>
                  <p>PWCC Marketplace, LLC (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://www.pwccmarketplace.com including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this Privacy Policy carefully.</p>
                  <p>We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Revised” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.</p>
                  <h2 class="title-m">COLLECTION OF YOUR INFORMATION</h2>
                  <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              </div>
          </section> -->

      </section><!-- policy E -->

  </div>
</template>

<script>
  export default {
    data () {
      return {				
        //tab: Silver / Base
        showNavbar: true,
        navbarFixed: false,
        lastScrollPosition: 0,
        scrollValue: 0
      }
    },
    mounted () {
        // this.lastScrollPosition = window.pageYOffset
        window.addEventListener('scroll', this.onScroll);
        
    },
    beforeDestroy(){
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        anchorScroll(){
          $(".tab-anchor-tabs").on('click',".tab-anchor", function(){
              var attr = this.getAttribute("data-goHash");
              var target_top = document.getElementById(attr).offsetTop;
              $("html,body").animate({scrollTop: target_top - 200}, 700);
          });
        },
        onScroll() {
          const OFFSET = 60;
          const headerHeight = 30;
          if (window.pageYOffset < 0) {
              return
          }
          if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
              return
          }
          this.navbarFixed = window.pageYOffset > OFFSET && window.pageYOffset < this.lastScrollPosition
          this.showNavbar = window.pageYOffset < this.lastScrollPosition
          this.lastScrollPosition = window.pageYOffset
        },
    },
      
  }
</script>

<style lang="scss">
  @import "assets/css/base/default.scss";
  @import "assets/css/pages/subPage_policy.scss";
 
</style>