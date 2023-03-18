import React from "react";
import {Link} from 'react-router-dom';
import styles from './ThankYou.module.scss'
import {Helmet} from "react-helmet";

const ThankYou = () => {



    return (
        <div className={'ThankYou'}>
            <Helmet>
                <script>
                    {`<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '155100287421358');
fbq('track', 'Lead');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=155100287421358&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->`}
                </script>
            </Helmet>
            <div className={styles.root}>
                    <div className="thank-wrapper">
                        <div className="div">Спасибо! Мы с вами свяжемся  в ближайшее время.
                            <Link to={'/'}>
                                <button>Назад</button>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ThankYou