const LOC_LEVEL = window.location.pathname.match(/\//g).length

function getRoot() {
    return "../".repeat(LOC_LEVEL)
}

function insertHeader() {
    document.write(`
    <div class="section-navbar">
        <div data-collapse="medium" data-animation="default" data-duration="400" data-w-id="083b3595-12c0-3eb5-8a08-5d830155c0c6" role="banner" class="navbar w-nav" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
            <div class="w-layout-grid grid-navbar">
                <div data-w-id="083b3595-12c0-3eb5-8a08-5d830155c0c8" class="nav" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <a href="`+ getRoot() + `." aria-current="page" class="brand w-nav-brand w--current" aria-label="home"><img src="` + getRoot() + `eonyx_assets/601be3303f11492babdd41e2_logo.svg" loading="lazy" alt="" class="logo hide"><img src="` + getRoot() + `eonyx_assets/eonyx.svg" style="height: 46px;" loading="lazy" alt="" class="logo"></a>
                </div>
                <div data-w-id="083b3595-12c0-3eb5-8a08-5d830155c0cb" class="nav nav-links" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <nav role="navigation" class="nav-menu w-nav-menu">
                        <a href="`+ getRoot() + `." aria-current="page" class="nav-link w-nav-link w--current">Home<br></a>
                        <div class="dropdown">
                            <a class="dropdown-btn nav-link w-nav-link">Services</a>
                            <div class="dropdown-content nav-bar">
                                <div class="dropdown-content-block">
                                    <div class="block-title">Mobile</div>
                                    <a href="`+ getRoot() + `services/ios-app-development">iOS App Development</a>
                                    <a href="`+ getRoot() + `services/android-app-development">Android App Development</a>
                                    <a href="`+ getRoot() + `services/react-native-app-development">React Native App Development</a>
                                </div>
                                <div class="dropdown-content-block">
                                    <div class="block-title">Web</div>
                                    <a href="`+ getRoot() + `services/web-design">Web Design</a>
                                    <a href="`+ getRoot() + `services/web-development">Web Development</a>
                                    <a href="`+ getRoot() + `services/software-development">Software Development</a>
                                </div>
                                <div class="dropdown-content-block">
                                    <div class="block-title">Architecture</div>
                                    <a href="`+ getRoot() + `services/technical-architecture-design">Technical Architecture</a>
                                    <a href="`+ getRoot() + `services/software-consultancy">Software Consultancy</a>
                                    <a href="`+ getRoot() + `services/cloud-platform-management">Cloud Platform Management</a>
                                </div>
                                <div class="dropdown-content-block">
                                    <div class="block-title">Integration</div>
                                    <a href="`+ getRoot() + `services/api-design-and-development">API Development</a>
                                    <a href="`+ getRoot() + `services/software-services">Services &amp; Support</a>
                                    <a href="`+ getRoot() + `services/software-integration">Software Integration</a>
                                </div>
                            </div>
                        </div>
                        <a href="`+ getRoot() + `contact" class="nav-link w-nav-link">Contact<br></a>
                    </nav>
                    <a  class="btn-quote-desktop button w-button eonyx-accent-pulse"
                    style="margin-left: 25px; padding: 8px 20px; font-size: 15px; opacity: 1; translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                        href="`+ getRoot() + `/quote-request">Get a free quote</a>
                </div>

                <div style="position: absolute; z-index: -1; bottom: -40px; left: 0; padding: 10px 0; display: flex; justify-content: center; background-color: #FF7F40; width: 100%">
                    <div style="color: white; font-weight: bold; font-size: 18px;">
                    We're hiring &rarr;
                    <a  class="button w-button eonyx-accent-pulse" style="margin-left: 5px; padding: 8px 20px; font-size: 15px; opacity: 1; translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                        href="`+ getRoot() + `apply">Apply now!</a>
                    </div>
                </div>

                <div data-w-id="083b359512c0-3eb5-8a08-5d830155c0dc" class="nav right " style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <div class="extra-nav-menu hide">
                        <a href="`+ getRoot() + `log-in" class="nav-link w-nav-link">Log in<br></a>
                        <a href="`+ getRoot() + `sign-up" class="nav-button w-button">Sign up</a>
                    </div>
                    <div class="menu-button w-nav-button" style="-webkit-user-select: text;" aria-label="menu" role="button" tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                        <div class="menu-icon w-icon-nav-menu" style="font-size: 36px;"></div>
                    </div>
                </div>
            </div>
            <a  class="btn-quote-mobile button w-button eonyx-accent-pulse"
                style="display:none; margin-left: 25px; margin-top: 15px; margin-bottom: 10px; padding: 8px 40px; font-size: 15px; opacity: 1; translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                href="`+ getRoot() + `quote-request">Get a free quote</a>
            <div class="navbar-bg" style="opacity: 1;"></div>
            <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
        </div>
    </div>
    `)
}

function insertFooter() {
    document.write(`
    <div class="section-footer">
        <div class="content">
            <div class="w-layout-grid grid-footer">
                <div id="w-node-da92ec24-0a93-58e4-1a73-58ed5b0e2fba-5b0e2fb7" data-w-id="da92ec24-0a93-58e4-1a73-58ed5b0e2fba" class="block-footer" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"><img src="`+ getRoot() + `eonyx_assets/601be3303f11492babdd41e2_logo.svg" loading="lazy" alt="" class="logo-footer hide"><img src="` + getRoot() + `eonyx_assets/eonyx.svg" style="height: 46px; margin-bottom: 35px;" loading="lazy" alt="" class="logo">
                    <p class="paragraph-footer">
                        <h6>Eonyx Infotech LLP</h6>
                        137, Lane 1, <br>Iqbal Abad, Bemina, Srinagar,<br>Jammu and Kashmir - 190018
                        <br><br>
                        <b>+91 7006009207</b><br>
                        <a href="mailto:info@eonyx.io">info@eonyx.io</a>
                    </p>
                </div>
                <div data-w-id="da92ec24-0a93-58e4-1a73-58ed5b0e2fc6" class="block-footer" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <div class="heading-footer">Quick Links</div>
                    <a href="`+ getRoot() + `company" aria-current="page" class="link-footer w--current  hide">Company<br></a>
                    <a href="`+ getRoot() + `./" class="link-footer ">Home</a>
                    <a href="`+ getRoot() + `careers" class="link-footer">Careers at Eonyx</a>
                    <a href="`+ getRoot() + `apply" class="link-footer" target="_blank">Apply now</a>
                    <a href="`+ getRoot() + `features" class="link-footer hide">Features</a>
                    <a href="`+ getRoot() + `contact" class="link-footer">Contact Us</a>
                    <a href="`+ getRoot() + `blog" class="link-footer  hide">Blog</a>
                </div>
                <div data-w-id="da92ec24-0a93-58e4-1a73-58ed5b0e2fc6" class="block-footer" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <div class="heading-footer">Services</div>
                    <div style="display: flex;">
                        <div style="padding: 0 5px;">
                            <a class="link-footer" href="`+ getRoot() + `services/ios-app-development">iOS App Development</a>
                            <a class="link-footer" href="`+ getRoot() + `services/android-app-development">Android App Development</a>
                            <a class="link-footer" href="`+ getRoot() + `services/react-native-app-development">React Native App Development</a>
                            <a class="link-footer" href="`+ getRoot() + `services/web-design">Web Design</a>
                            <a class="link-footer" href="`+ getRoot() + `services/web-development">Web Development</a>
                            <a class="link-footer" href="`+ getRoot() + `services/software-development">Software Development</a>
                        </div>
                        <div style="padding: 0 5px;">
                            <a class="link-footer" href="`+ getRoot() + `services/technical-architecture-design">Technical Architecture</a>
                            <a class="link-footer" href="`+ getRoot() + `services/software-consultancy">Software Consultancy</a>
                            <a class="link-footer" href="`+ getRoot() + `services/cloud-platform-management">Cloud Platform Management</a>
                            <a class="link-footer" href="`+ getRoot() + `services/api-design-and-development">API Development</a>
                            <a class="link-footer" href="`+ getRoot() + `services/software-services">Services &amp; Support</a>
                            <a class="link-footer" href="`+ getRoot() + `services/software-integration">Software Integration</a>
                        </div>
                    </div>
                </div>
                <div data-w-id="da92ec24-0a93-58e4-1a73-58ed5b0e2fd2" class="block-footer hide" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <div class="heading-footer">Social</div>
                        <a href="#" target="_blank" class="link-footer">Facebook<br></a>
                        <a href="#" target="_blank" class="link-footer">Instagram</a>
                        <a href="#"target="_blank" class="link-footer">Twitter</a>
                        <a href="#" target="_blank" class="link-footer">YouTube</a>
                    </div>
                <div data-w-id="da92ec24-0a93-58e4-1a73-58ed5b0e2fde" class="block-footer hide" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <div class="heading-footer">Template</div>
                    <a href="`+ getRoot() + `template-info/instructions" class="link-footer">Instructions</a>
                    <a href="`+ getRoot() + `template-info/licensing" class="link-footer">Licensing<br></a>
                    <a href="`+ getRoot() + `template-info/style-guide" class="link-footer">Style Guide</a>
                    <a href="`+ getRoot() + `template-info/changelog" class="link-footer">Changelog</a>
                </div>
            </div>
            <div data-w-id="da92ec24-0a93-58e4-1a73-58ed5b0e2fe8" class="footer-down" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                <div class="text-footer-down">Copyright © ` + new Date().getFullYear() + ` Eonyx. All Rights Reserved.</div>
            </div>
        </div>
    </div>
    <!-- Start of HubSpot Embed Code --><script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/20288898.js"></script><!-- End of HubSpot Embed Code -->
    <script src="https://sc.eonyx.io/index.js" data-o="eonyx"></script>
    `)
}

function insertStartBanner() {
    document.write(`
    <div class="section" id="get-started">
        <div class="content">
            <div data-w-id="d0dc812c-ec2f-fd6d-6ad9-77361725f73b" class="w-layout-grid grid-banner" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                <div class="text-banner">
                    <h2 class="heading white">Start your project with Eonyx</h2>
                    <p class="paragraph white">Enter your email to get started.</p>
                    <div class="form-block-banner w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" method="get" action="`+ getRoot() + `/quote-request"  class="form-banner"><input type="email" class="text-field-white w-input" maxlength="256" name="email" data-name="Email" placeholder="Your email" id="Email" required=""><input type="submit" value="Get Started!" data-wait="Please wait..." class="submit-button-white w-button"></form>
                        <div
                            class="success-message w-form-done">
                            <div class="success-text">Thank you! Your submission has been received!</div>
                    </div>
                    <div class="error-message w-form-fail">
                        <div class="error-text">Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
            </div>
            <div class="img-banner">
                <div class="block-app-screen---c"><img src="`+ getRoot() + `eonyx_assets/6022aa34552161bc2b3fd3da_app%2520screen%25206.svg" loading="lazy" alt="" class="app-screen---c" style="will-change: transform; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"></div>
                <div
                    class="block-circle---c-down" style="will-change: transform; transform: translate3d(0px, 80px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"><img src="`+ getRoot() + `eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png" loading="lazy" sizes="(max-width: 479px) 24vw, (max-width: 767px) 25vw, 24vw" srcset="` + getRoot() + `eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle-p-500.png 500w, ` + getRoot() + `eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png 730w"
                        alt="" class="image-circle---c1" style="will-change: transform; transform: translate3d(-32px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"><img src="`+ getRoot() + `eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png"
                        loading="lazy" sizes="9vw" srcset="`+ getRoot() + `eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle-p-500.png 500w, eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png 730w" alt="" class="image-circle---c2" style="will-change: transform; transform: translate3d(16px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"></div>
            <div
                class="block-circle---c-top" style="will-change: transform; transform: translate3d(0px, 100px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"><img src="`+ getRoot() + `eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png" loading="lazy" sizes="(max-width: 479px) 18vw, 19vw" srcset="` + getRoot() + `eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle-p-500.png 500w, ` + getRoot() + `eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png 730w"
                    alt="" class="image-circle---c3" style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"><img src="`+ getRoot() + `eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png"
                    loading="lazy" sizes="10vw" srcset="`+ getRoot() + `eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle-p-500.png 500w, eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png 730w" alt="" class="image-circle---c4" style="will-change: transform; transform: translate3d(32px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"></div>
    </div>
    `)
}

function insertSteps(discover = '', design = '', develop = '', discoverTitle = 'Discover', designTitle = 'Design', developTitle = 'Develop') {
    document.write(`
    <div class="w-layout-grid grid-sequence">
        <div data-w-id="Div Block 7"
            style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
            class="sequence">
            <div class="icon-sequence-bg" style="padding: 14px">
                <div class="number-sequence-bg">
                    <div class="number-sequence">1</div>
                </div>
                <img src="`+ getRoot() + `eonyx_assets/discover.svg" loading="lazy" style="width: 60px; height: 60px;" alt="" class="icon-sequence" width="35">
            </div>
            <h4 class="heading-sequence"><span class="text-accent">` + discoverTitle + `</span></h4>
            <p class="paragraph-sequence">` + (discover ? discover : 'Discuss your business ideas with us in one-on-one in-depth discovery calls') + `.</p>
        </div>
        <img src="`+ getRoot() + `eonyx_assets/6024188faacdf6e123e5a0d8_arrow%25201.svg" loading="lazy"
            style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
            data-w-id="Image" alt="" id="w-node-image-9512f16b" class="img-arrow---1">
        <div data-w-id="5939fced-061f-0f25-e75e-7a91559b0cd7"
            style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
            class="sequence">
            <div class="icon-sequence-bg" style="padding: 14px">
                <div class="number-sequence-bg">
                    <div class="number-sequence">2</div>
                </div>
                <img src="`+ getRoot() + `eonyx_assets/design.svg" loading="lazy" alt="" style="width: 60px; height: 60px;" class="icon-sequence" width="35">
            </div>
            <h4 class="heading-sequence"><span class="text-accent">` + designTitle + `</span></h4>
            <p class="paragraph-sequence">` + (design ? design : 'Evaluate the product and technical architecture designed for you by <span class="text-accent-secondary">Eonyx</span>') + `.</p>
        </div>
        <img src="`+ getRoot() + `eonyx_assets/6024188fbbb5c77ef01f5fac_arrow%25202.svg" loading="lazy"
            style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
            data-w-id="8fdb0733-9c0b-9d9a-d4ac-47309542a143" alt=""
            id="w-node-_8fdb0733-9c0b-9d9a-d4ac-47309542a143-9512f16b" class="img-arrow---2">
        <div data-w-id="1dd55293-f75c-254b-cf9b-00c735c9a649"
            style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
            class="sequence">
            <div class="icon-sequence-bg" style="padding: 14px">
                <div class="number-sequence-bg">
                    <div class="number-sequence">3</div>
                </div>
                <img src="`+ getRoot() + `eonyx_assets/develop.svg" loading="lazy" alt="" style="width: 60px; height: 60px;" class="icon-sequence" width="35">
            </div>
            <h4 class="heading-sequence"><span class="text-accent">` + developTitle + `</span></h4>
            <p class="paragraph-sequence">` + (develop ? develop : 'See your idea come to life with cutting-edge technology using the latest industry standards') + `.</p>
        </div>
    </div>
    `)
}

function insertTestimonial() {
    document.write(`
    <div class="section">
        <div class="content">
            <div id="w-node-div-block-15-9512f16b" data-w-id="Div Block 15" class="block-left" style=" padding-right: 0; margin-bottom: 15px; ">
                <h2 data-w-id="feb86f04-9b03-b314-7698-5351e304e5b2" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="heading">What clients say about us</h2>
            </div>
            <div class="slideshow-container">
                <div class="eonyxSlides fade">
                    <div class="testimonial eonyx-testimonial">
                        <div class="testimonial-image">
                        <img src="https://www.stamats.com/wp-content/uploads/2021/07/James-Vineburgh.jpg" />
                        </div>
                        <div class="testimonial-content">
                            <p class="paragraph-testimonial">Eonyx is an incredibly talented and versatile group of digital solutions experts. And, they do so much more than just develop solutions; they take ideas that are brought to them and then make those ideas better before transforming them into products. Additionally, they are top-notch in terms of timeliness, value delivered, and general professionalism. Plus, they're fun to work with!</p>
                            <div class="client"><img src="`+ getRoot() + `eonyx_assets/6025ab6ccd88b4ecc2780f82_client%2520avatar.svg" loading="lazy" alt="" class="client-avatar">
                                <a href="https://www.stamats.com/author/james-vineburgh/" target="_blank">
                                    <div class="client-info">
                                        <div class="name">Dr. James Vineburgh</div>
                                        <div class="info">Chief Products Officer at Stamats Communications, Inc.</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="eonyxSlides fade">
                    <div class="testimonial eonyx-testimonial">
                        <div class="testimonial-image">
                        <img src="https://liferamp360.com/wp-content/uploads/2021/08/LifeRamp-Team_huckaby.png" />
                        </div>
                        <div class="testimonial-content">
                            <p class="paragraph-testimonial">Eonyx has been the perfect partner for us to unlock our vision at LifeRamp. The team is very innovative and always comes with fresh ideas while achieving key milestones on time.</p>
                            <div class="client"><img src="`+ getRoot() + `eonyx_assets/6025ab6ccd88b4ecc2780f82_client%2520avatar.svg" loading="lazy" alt="" class="client-avatar">
                                <a href="https://liferamp360.com/meet-the-team/" target="_blank">
                                    <div class="client-info">
                                        <div class="name">Michael Huckaby</div>
                                        <div class="info">Founder & CEO at LifeRamp, Inc.</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="prev" onclick="addSlides(-1)">&#10094;</a>
                <a class="next" onclick="addSlides(1)">&#10095;</a>
            </div>
            <br>
            <div style="text-align:center">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
            </div>
        </div>
    </div>
    `);
    showSlide(slideIndex);
    setSliderTimer();
}

function insertPortfolio() {
    document.write(`
    <div class="section">
        <div class="content">
            <div class="block-center">
                <h2 data-w-id="ac1c39f6-3071-f098-aec3-9337033bdfe6" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="heading">Portfolio</h2>
            </div>
            <div class="collection-list-wrapper w-dyn-list">
                <div role="list" class="collection-list w-dyn-items">
                    <div role="listitem" class="collection-item w-dyn-item">
                        <div data-w-id="Div Block 16" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="block-blog">
                            <a href="#" class="link-image-blog w-inline-block"><img src="`+ getRoot() + `images/portfolio/liferamp-desktop.png" loading="lazy" alt="5 Technologies that are true student helpers these days" class="image-blog"></a>
                            <div class="category-blog">Web</div>
                            <a href="#" class="link-heading-blog w-inline-block">
                                <h5 data-w-id="Heading 6" class="heading-blog">2021</h5>
                            </a>
                        </div>
                    </div>
                    <div role="listitem" class="collection-item w-dyn-item">
                        <div data-w-id="Div Block 16" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="block-blog">
                            <a href="#" class="link-image-blog w-inline-block"><img src="`+ getRoot() + `images/portfolio/liferamp-ios.png" loading="lazy" alt="How to write your first android app: Useful Advice" class="image-blog"></a>
                            <div class="category-blog">iOS</div>
                            <a href="#" class="link-heading-blog w-inline-block">
                                <h5 data-w-id="Heading 6" class="heading-blog">2021</h5>
                            </a>
                            <div class="date-blog hide">2021</div>
                        </div>
                    </div>
                    <div role="listitem" class="collection-item w-dyn-item">
                        <div data-w-id="Div Block 16" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="block-blog">
                            <a href="#" class="link-image-blog w-inline-block"><img src="`+ getRoot() + `images/portfolio/liferamp-android.png" loading="lazy" alt="Is it worth it to build a mobile app for your business?" class="image-blog"></a>
                            <div class="category-blog">Android</div>
                            <a href="#" class="link-heading-blog w-inline-block">
                                <h5 data-w-id="Heading 6" class="heading-blog">2021</h5>
                            </a>
                        </div>
                    </div>
                    <div role="listitem" class="collection-item w-dyn-item">
                        <div data-w-id="Div Block 16" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="block-blog">
                            <a href="#" class="link-image-blog w-inline-block"><img src="`+ getRoot() + `images/portfolio/product-design.jpg" loading="lazy" alt="How to choose the right app reseller program" class="image-blog"></a>
                            <div class="category-blog">Product Design</div>
                            <a href="#" class="link-heading-blog w-inline-block">
                                <h5 data-w-id="Heading 6" class="heading-blog">2021</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
}


function insertBrandsBanner() {
    document.write(`
    <div class="section section-brands-banner">
        <div class="content-title">Trusted by the world's best</div>
        <div class="content">
            <div class="w-layout-grid grid-5-columns">
                <div class="w-layout-grid grid-row" data-w-id="Grid 9" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <div class="brand-image">
                        <img src="`+ getRoot() + `images/clients/LifeRamp.svg" />
                    </div>
                </div>
                <div class="w-layout-grid grid-row" data-w-id="Grid 9" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <div class="brand-image">
                        <img src="`+ getRoot() + `images/clients/stamats_logo.svg" />
                    </div>
                </div>
                <div class="w-layout-grid grid-row" data-w-id="Grid 9" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <div class="brand-image">
                        <img src="`+ getRoot() + `images/clients/shmooze_logo.png" />
                    </div>
                </div>
                <div class="w-layout-grid grid-row" data-w-id="Grid 9" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <div class="brand-image">
                        <img src="https://radar.stamats.com/assets/images/Stamats_Logo.png" />
                    </div>
                </div>
                <div class="w-layout-grid grid-row" data-w-id="Grid 9" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <div class="brand-image">
                        <img src="`+ getRoot() + `images/clients/AMS_logo.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
}


function insertTechStack() {
    document.write(`
    <div class="section section-brands-banner">
        <div class="content-title">Tech Stack</div>
        <div class="content tech-stack-container">
            <div class="tech-stack" id="tech-stack-1">
                <div class="tech-stack-list">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/amazonwebservices-original.svg?size=96&color=currentColor" alt="Amazonwebservices" title="Amazonwebservices">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" alt="Digitalocean" title="Digitalocean">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" title="Firebase">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/git-original.svg?size=96&color=currentColor" alt="Git" title="Git">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/github-original.svg?size=96&color=currentColor" alt="Github" title="Github">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/gitlab-original.svg?size=96&color=currentColor" alt="Gitlab" title="Gitlab">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" alt="PHP" title="PHP">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg" alt="Composer" title="Composer">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/laravel-plain.svg?size=96&color=ff2d20" alt="Laravel" title="Laravel">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/codeigniter-plain.svg?size=96&color=dd4814" alt="Codeigniter" title="Codeigniter">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="Wordpress" title="Wordpress">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/mysql-original-wordmark.svg?size=96&color=currentColor" alt="Mysql" title="Mysql">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/redis-original.svg?size=96&color=currentColor" alt="Redis" title="Redis">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" title="Linux">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/ubuntu-plain.svg?size=96&color=e95420" alt="Ubuntu" title="Ubuntu">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/windows8-original.svg?size=96&color=currentColor" alt="Windows8" title="Windows8">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/apple-original.svg?size=96&color=currentColor" alt="Apple" title="Apple">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/android-original.svg?size=96&color=currentColor" alt="Android" title="Android">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/docker-original.svg?size=96&color=currentColor" alt="Docker" title="Docker">
                    <img class="tech-stack-item" src="https://afaan.dev/assets/traefik-icon.svg" alt="Traefik" title="Traefik">
                    <img class="tech-stack-item" src="https://afaan.dev/assets/cloudflare.svg" alt="Cloudflare" title="Cloudflare">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/html5-original.svg?size=96&color=currentColor" alt="Html5" title="Html5">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/css3-original.svg?size=96&color=currentColor" alt="Css3" title="Css3">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS" title="SASS">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/bootstrap-plain.svg?size=96&color=7952b3" alt="Bootstrap" title="Bootstrap">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind" title="Tailwind">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/javascript-original.svg?size=96&color=currentColor" alt="Javascript" title="Javascript">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/typescript-original.svg?size=96&color=currentColor" alt="Typescript" title="Typescript">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/nodejs-original.svg?size=96&color=currentColor" alt="NodeJS" title="NodeJS">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/express-original-wordmark.svg?size=96&color=currentColor" alt="Express" title="Express">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/sequelize-original.svg?size=96&color=currentColor" alt="Sequelize" title="Sequelize">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/vuejs-original.svg?size=96&color=currentColor" alt="Vuejs" title="Vuejs">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/react-original.svg?size=96&color=currentColor" alt="React" title="React">
                    <img class="tech-stack-item" src="https://afaan.dev/assets/react-native.svg" alt="React Native" title="React Native">
                    <img class="tech-stack-item" src="https://afaan.dev/assets/expo.svg" alt="Expo" title="Expo">
                    <img class="tech-stack-item" src="https://afaan.dev/assets/zapier.svg" alt="Zapier" title="Zapier">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/jquery-original.svg?size=96&color=currentColor" alt="Jquery" title="Jquery">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/python-original.svg?size=96&color=currentColor" alt="Python" title="Python">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/c-original.svg?size=96&color=currentColor" alt="C" title="C">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/cplusplus-original.svg?size=96&color=currentColor" alt="Cplusplus" title="Cplusplus">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/csharp-original.svg?size=96&color=currentColor" alt="Csharp" title="Csharp">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/java-original.svg?size=96&color=currentColor" alt="Java" title="Java">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain-wordmark.svg" alt="DotNet" title="DotNet">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/apache-original.svg?size=96&color=currentColor" alt="Apache" title="Apache">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/ssh-original-wordmark.svg?size=96&color=currentColor" alt="Ssh" title="Ssh">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-original.svg" alt="Inkscape" title="Inkscape">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash" title="Bash">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="Vscode" title="Vscode">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/visualstudio-plain.svg?size=96&color=currentColor" alt="Visualstudio" title="Visualstudio">
                    <img class="tech-stack-item" src="https://afaan.dev/assets/postman.svg" alt="Postman" title="Postman">
                    <img class="tech-stack-item" src="https://www.devart.com/images/products/logos/dbforge-mysql-studio.svg" alt="DbForge Studio" title="DbForge Studio">
                    <img class="tech-stack-item" src="https://icongr.am/devicon/trello-plain.svg?size=96&color=026aa7" alt="Trello" title="Trello">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" title="Figma">
                    <img class="tech-stack-item" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt="Slack" title="Slack">
                </div>
            </div>
        </div>
    </div>
    `)
}

// slider
var sliderInterval = null
function setSliderTimer() {
    sliderInterval = setInterval(sliderTimer, 5000);
}
function sliderTimer() {
    addSlides(1)
}

var slideIndex = 1;
function addSlides(n) {
    showSlide(slideIndex += n);
    clearInterval(sliderInterval);
    setSliderTimer()
}

function currentSlide(n) {
    showSlide(slideIndex = n);
    clearInterval(sliderInterval);
    setSliderTimer()
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("eonyxSlides");
    var eonyxDots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < eonyxDots.length; i++) {
        eonyxDots[i].className = eonyxDots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    eonyxDots[slideIndex - 1].className += " active";
}

// slider

function logEonyx() {
    console.log(`



    EEEEEEEEEEEEEEEEEEEEEE
    E::::::::::::::::::::E
    E::::::::::::::::::::E
    EE::::::EEEEEEEEE::::E
      E:::::E       EEEEEE   ooooooooooo   nnnn  nnnnnnnn yyyyyyy           yyyyyyyxxxxxxx      xxxxxxx
      E:::::E              oo:::::::::::oo n:::nn::::::::nny:::::y         y:::::y  x:::::x    x:::::x
      E::::::EEEEEEEEEE   o:::::::::::::::on::::::::::::::nny:::::y       y:::::y    x:::::x  x:::::x
      E:::::::::::::::E   o:::::ooooo:::::onn:::::::::::::::ny:::::y     y:::::y      x:::::xx:::::x
      E:::::::::::::::E   o::::o     o::::o  n:::::nnnn:::::n y:::::y   y:::::y        x::::::::::x
      E::::::EEEEEEEEEE   o::::o     o::::o  n::::n    n::::n  y:::::y y:::::y          x::::::::x
      E:::::E             o::::o     o::::o  n::::n    n::::n   y:::::y:::::y           x::::::::x
      E:::::E       EEEEEEo::::o     o::::o  n::::n    n::::n    y:::::::::y           x::::::::::x
    EE::::::EEEEEEEE:::::Eo:::::ooooo:::::o  n::::n    n::::n     y:::::::y           x:::::xx:::::x
    E::::::::::::::::::::Eo:::::::::::::::o  n::::n    n::::n      y:::::y           x:::::x  x:::::x
    E::::::::::::::::::::E oo:::::::::::oo   n::::n    n::::n     y:::::y           x:::::x    x:::::x
    EEEEEEEEEEEEEEEEEEEEEE   ooooooooooo     nnnnnn    nnnnnn    y:::::y           xxxxxxx      xxxxxxx
                                                                y:::::y
                                                               y:::::y
                                                              y:::::y
                                                             y:::::y
                                                            yyyyyyy

    We're hiring! Come join us to build a new future.
    Apply here: https://eonyx.io/apply?utm_scid=814baa6c-604a-453b-bf62-a8d7cc748722&email=[your email]
    `);
}
