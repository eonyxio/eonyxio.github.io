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
                    <a href="`+ getRoot() +`." aria-current="page" class="brand w-nav-brand w--current" aria-label="home"><img src="`+ getRoot() +`eonyx_assets/601be3303f11492babdd41e2_logo.svg" loading="lazy" alt="" class="logo hide"><img src="`+ getRoot() +`eonyx_assets/eonyx.svg" style="height: 46px;" loading="lazy" alt="" class="logo"></a>
                </div>
                <div data-w-id="083b3595-12c0-3eb5-8a08-5d830155c0cb" class="nav nav-links" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <nav role="navigation" class="nav-menu w-nav-menu">
                        <a href="`+ getRoot() +`." aria-current="page" class="nav-link w-nav-link w--current">Home<br></a>
                        <div class="dropdown">
                            <a class="dropdown-btn nav-link w-nav-link">Services</a>
                            <div class="dropdown-content nav-bar">
                                <div class="dropdown-content-block">
                                    <a href="`+ getRoot() +`services/android-app-development">Android App Development</a>
                                    <a href="`+ getRoot() +`services/ios-app-development">iOS App Development</a>
                                    <a href="`+ getRoot() +`services/react-native-app-development">React Native App Development</a>
                                </div>
                                <div class="dropdown-content-block">
                                <a href="`+ getRoot() +`services/web-design">Web Design</a>
                                    <a href="`+ getRoot() +`services/web-development">Web Development</a>
                                    <a href="`+ getRoot() +`services/api-design-and-development">API Development</a>
                                </div>
                                <div class="dropdown-content-block">
                                    <a href="`+ getRoot() +`services/cloud-platform-management">Cloud Platform Management</a>
                                    <a href="`+ getRoot() +`services/software-consultancy">Software Consultancy</a>
                                    <a href="`+ getRoot() +`services/software-development">Software Development</a>
                                    <a href="`+ getRoot() +`services/technical-architecture">Technical Architecture</a>
                                    <a href="`+ getRoot() +`services/software-support">Software Support</a>
                                    <a href="`+ getRoot() +`services/software-services">Software Services</a>
                                </div>
                            </div>
                        </div>
                        <a href="`+ getRoot() +`careers" class="nav-link w-nav-link">Careers<br></a>
                        <a href="`+ getRoot() +`features" class="nav-link w-nav-link hide">Features<br></a>
                        <a href="`+ getRoot() +`contact" class="nav-link w-nav-link">Contact<br></a>
                        <a href="`+ getRoot() +`blog" class="nav-link w-nav-link hide">Blog<br></a>
                        <a href="`+ getRoot() +`company" class="nav-link w-nav-link hide">Company<br></a>
                    </nav>
                </div>
                <div data-w-id="083b3595-12c0-3eb5-8a08-5d830155c0dc" class="nav right " style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <div class="extra-nav-menu hide">
                        <a href="`+ getRoot() +`log-in" class="nav-link w-nav-link">Log in<br></a>
                        <a href="`+ getRoot() +`sign-up" class="nav-button w-button">Sign up</a>
                    </div>
                    <div class="menu-button w-nav-button" style="-webkit-user-select: text;" aria-label="menu" role="button" tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
                        <div class="menu-icon w-icon-nav-menu" style="font-size: 36px;"></div>
                    </div>
                </div>
            </div>
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
                <div id="w-node-da92ec24-0a93-58e4-1a73-58ed5b0e2fba-5b0e2fb7" data-w-id="da92ec24-0a93-58e4-1a73-58ed5b0e2fba" class="block-footer" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"><img src="`+ getRoot() +`eonyx_assets/601be3303f11492babdd41e2_logo.svg" loading="lazy" alt="" class="logo-footer hide"><img src="`+ getRoot() +`eonyx_assets/eonyx.svg" style="height: 46px; margin-bottom: 35px;" loading="lazy" alt="" class="logo">
                    <p class="paragraph-footer">
                        <h6>Eonyx Infotech LLP</h6>
                        137, Lane 1, <br>Iqbal Abad, Bemina, Srinagar,<br>Jammu and Kashmir - 190018<br><br><a href="mailto:info@eonyx.io">info@eonyx.io</a>
                    </p>
                </div>
                <div data-w-id="da92ec24-0a93-58e4-1a73-58ed5b0e2fc6" class="block-footer" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                    <div class="heading-footer">Quick Links</div>
                        <a href="`+ getRoot() +`company" aria-current="page" class="link-footer w--current  hide">Company<br></a>
                        <a href="`+ getRoot() +`./" class="link-footer ">Home</a>
                        <a href="`+ getRoot() +`careers" class="link-footer">Careers</a>
                        <a href="`+ getRoot() +`apply" class="link-footer" target="_blank">Apply now</a>
                        <a href="`+ getRoot() +`features" class="link-footer hide">Features</a>
                        <a href="`+ getRoot() +`contact" class="link-footer">Contact</a>
                        <a href="`+ getRoot() +`blog" class="link-footer  hide">Blog</a>
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
                    <a href="`+ getRoot() +`template-info/instructions" class="link-footer">Instructions</a>
                    <a href="`+ getRoot() +`template-info/licensing" class="link-footer">Licensing<br></a>
                    <a href="`+ getRoot() +`template-info/style-guide" class="link-footer">Style Guide</a>
                    <a href="`+ getRoot() +`template-info/changelog" class="link-footer">Changelog</a>
                </div>
            </div>
            <div data-w-id="da92ec24-0a93-58e4-1a73-58ed5b0e2fe8" class="footer-down" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;">
                <div class="text-footer-down">Copyright © ` + new Date().getFullYear() + ` Eonyx. All Rights Reserved.</div>
            </div>
        </div>
    </div>
    <!-- Start of HubSpot Embed Code --><script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/20288898.js"></script><!-- End of HubSpot Embed Code -->
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
                        <form id="email-form" name="email-form" data-name="Email Form" method="get" action="contact"  class="form-banner"><input type="email" class="text-field-white w-input" maxlength="256" name="email" data-name="Email" placeholder="Your email" id="Email" required=""><input type="submit" value="Get Started!" data-wait="Please wait..." class="submit-button-white w-button"></form>
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
                <div class="block-app-screen---c"><img src="`+ getRoot() +`eonyx_assets/6022aa34552161bc2b3fd3da_app%2520screen%25206.svg" loading="lazy" alt="" class="app-screen---c" style="will-change: transform; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"></div>
                <div
                    class="block-circle---c-down" style="will-change: transform; transform: translate3d(0px, 80px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"><img src="`+ getRoot() +`eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png" loading="lazy" sizes="(max-width: 479px) 24vw, (max-width: 767px) 25vw, 24vw" srcset="`+ getRoot() +`eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle-p-500.png 500w, `+ getRoot() +`eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png 730w"
                        alt="" class="image-circle---c1" style="will-change: transform; transform: translate3d(-32px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"><img src="`+ getRoot() +`eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png"
                        loading="lazy" sizes="9vw" srcset="`+ getRoot() +`eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle-p-500.png 500w, eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png 730w" alt="" class="image-circle---c2" style="will-change: transform; transform: translate3d(16px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"></div>
            <div
                class="block-circle---c-top" style="will-change: transform; transform: translate3d(0px, 100px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"><img src="`+ getRoot() +`eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png" loading="lazy" sizes="(max-width: 479px) 18vw, 19vw" srcset="`+ getRoot() +`eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle-p-500.png 500w, `+ getRoot() +`eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png 730w"
                    alt="" class="image-circle---c3" style="will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"><img src="`+ getRoot() +`eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png"
                    loading="lazy" sizes="10vw" srcset="`+ getRoot() +`eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle-p-500.png 500w, eonyx_assets/60211e51b1e1bf249435035b_orange%2520circle.png 730w" alt="" class="image-circle---c4" style="will-change: transform; transform: translate3d(32px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"></div>
    </div>
    `)
}

function insertTestimonial() {
    document.write(`
    <div class="section">
        <div class="content">
            <div class="w-layout-grid grid-3-columns">
                <div id="w-node-div-block-15-9512f16b" data-w-id="Div Block 15" class="block-left">
                    <h2 data-w-id="feb86f04-9b03-b314-7698-5351e304e5b2" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="heading">What clients say about us</h2>
                    <p data-w-id="b362194f-ae3c-bca4-3695-6bf62e8819dc" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="paragraph">Clients text here</p><a data-w-id="0179a148-6b7d-5c6d-ce07-5b9fba26b7e3" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;"
                        href="`+ getRoot() +`company.html" class="button w-button">About Us</a></div>
                <div data-w-id="Grid 9" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="w-layout-grid grid-row">
                    <div class="testimonial">
                        <p class="paragraph-testimonial">Eonyx is an incredibly talented and versatile group of digital solutions experts. And, they do so much more than just develop solutions; they take ideas that are brought to them and then make those ideas better before transforming them into products. Additionally, they are top-notch in terms of timeliness, value delivered, and general professionalism. Plus, they're fun to work with!</p>
                        <div class="client"><img src="`+ getRoot() +`eonyx_assets/6025ab6ccd88b4ecc2780f82_client%2520avatar.svg" loading="lazy" alt="" class="client-avatar">
                            <div class="client-info">
                                <h6 class="name">Dr. James Vineburgh</h6>
                                <div class="info">Chief Products Officer at Stamats Communications</div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p class="paragraph-testimonial">Testimonial 2</p>
                        <div class="client"><img src="`+ getRoot() +`eonyx_assets/6025ab6ccd88b4ecc2780f82_client%2520avatar.svg" loading="lazy" alt="" class="client-avatar">
                            <div class="client-info">
                                <h6 class="name">Esther Howard</h6>
                                <div class="info">Senior Engineer</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-w-id="b18f8d74-066d-ad7f-4d2a-5b9cbddbb217" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="w-layout-grid grid-row">
                    <div class="testimonial">
                        <p class="paragraph-testimonial">Testimonial 3</p>
                        <div class="client"><img src="`+ getRoot() +`eonyx_assets/6025ab6ccd88b4ecc2780f82_client%2520avatar.svg" loading="lazy" alt="" class="client-avatar">
                            <div class="client-info">
                                <h6 class="name">Eleanor Pena</h6>
                                <div class="info">CEO</div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p class="paragraph-testimonial">Testimonial 4</p>
                        <div class="client"><img src="`+ getRoot() +`eonyx_assets/6025ab6ccd88b4ecc2780f82_client%2520avatar.svg" loading="lazy" alt="" class="client-avatar">
                            <div class="client-info">
                                <h6 class="name">Jane Cooper</h6>
                                <div class="info">Venture Lead</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
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
                            <a href="#" class="link-image-blog w-inline-block"><img src="`+ getRoot() +`eonyx_assets/6026ca574be648fb615b8fd8_blog%25204.svg" loading="lazy" alt="How to write your first android app: Useful Advice" class="image-blog"></a>
                            <div class="category-blog">Portfolio 1</div>
                            <a href="#" class="link-heading-blog w-inline-block">
                                <h5 data-w-id="Heading 6" class="heading-blog">Portfolio 1 text here</h5>
                            </a>
                            <div class="date-blog">February 12, 2021</div>
                        </div>
                    </div>
                    <div role="listitem" class="collection-item w-dyn-item">
                        <div data-w-id="Div Block 16" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="block-blog">
                            <a href="#" class="link-image-blog w-inline-block"><img src="`+ getRoot() +`eonyx_assets/6026ca3f40a378597490ec0c_blog%25203.svg" loading="lazy" alt="Is it worth it to build a mobile app for your business?" class="image-blog"></a>
                            <div class="category-blog">Portfolio 2</div>
                            <a href="#" class="link-heading-blog w-inline-block">
                                <h5 data-w-id="Heading 6" class="heading-blog">Portfolio 1 text here</h5>
                            </a>
                            <div class="date-blog">February 12, 2021</div>
                        </div>
                    </div>
                    <div role="listitem" class="collection-item w-dyn-item">
                        <div data-w-id="Div Block 16" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="block-blog">
                            <a href="#" class="link-image-blog w-inline-block"><img src="`+ getRoot() +`eonyx_assets/6026ca25e3c5b0fd9be9bea5_blog%25202.svg" loading="lazy" alt="How to choose the right app reseller program" class="image-blog"></a>
                            <div class="category-blog">Portfolio 3</div>
                            <a href="#" class="link-heading-blog w-inline-block">
                                <h5 data-w-id="Heading 6" class="heading-blog">Portfolio 3 text here</h5>
                            </a>
                            <div class="date-blog">February 12, 2021</div>
                        </div>
                    </div>
                    <div role="listitem" class="collection-item w-dyn-item">
                        <div data-w-id="Div Block 16" style="opacity: 0; transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg); transform-style: preserve-3d;" class="block-blog">
                            <a href="#" class="link-image-blog w-inline-block"><img src="`+ getRoot() +`eonyx_assets/6026c9f70f9e3e0a44a1bbe6_blog%25201.svg" loading="lazy" alt="5 Technologies that are true student helpers these days" class="image-blog"></a>
                            <div class="category-blog">Portfolio 4</div>
                            <a href="#" class="link-heading-blog w-inline-block">
                                <h5 data-w-id="Heading 6" class="heading-blog">Portfolio 4 text here</h5>
                            </a>
                            <div class="date-blog">February 12, 2021</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
}
