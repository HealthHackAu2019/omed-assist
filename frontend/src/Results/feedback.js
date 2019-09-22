import React from 'react';

export default {
    low: {
        normal: {
            non_significant: {
                summary: (
                    <>Based on your results, you may have a <strong>low risk</strong> of ongoing pain and opioid misuse.</>
                ),
                pain: (
                    <>
                        <p>You are currently not experiencing high levels of pain. Monitoring your levels of pain is an important part of managing acute pain.</p>
                        <ul>
                            <li>Keep a pain diary</li>
                            <li>Use relaxation strategies such as yoga, physical activity and other medications</li>
                        </ul>
                    </>
                ),
                opioid: (
                    <>
                        <p>You are at low risk of developing an opioid use problem. This means you are less likely than others to misuse your opioids.  Sometimes higher levels of pain can lead people to rely on their opioid medications.</p>
                        <ul>
                            <li>Monitor for any signs you might be misusing your opioids by using a medication diary</li>
                        </ul>
                    </>
                ),
                depression: (
                    <>
                        <p>You are not experiencing high levels of depression at the moment. This is good news.</p>
                        <p>You have indicated that you have had a history of depression and it’s important to look out for signs of depression so that you can address it early.</p>
                        <ul>
                            <li>Keep a mood diary</li>
                            <li>Exercise or doing things you enjoy are good tools to improve your mood.</li>
                        </ul>
                    </>
                ),
            },
            significant: {
                summary: (
                    <>Based on your results, you may have a <strong>high risk</strong> of ongoing pain, and a <strong>low risk</strong> of opioid misuse.</>
                ),
                pain: (
                    <>
                        <p>You have indicated that you are experiencing acute pain. Monitoring your levels of pain is an important part of managing acute pain.</p>
                        <ul>
                            <li>Keep a pain diary</li>
                            <li>Use relaxation strategies such as yoga, physical activity and other medications</li>
                        </ul>
                    </>
                ),
                opioid: (
                    <>
                        <p>You are at low risk of developing an opioid use problem. This means you are less likely than others to misuse your opioids.  Sometimes higher levels of pain can lead people to rely on their opioid medications.</p>
                        <ul>
                            <li>Monitor for any signs you might be misusing your opioids by using a medication diary</li>
                        </ul>
                    </>
                ),
                depression: (
                    <>
                        <p>You are not experiencing high levels of depression at the moment. This is good news.</p>
                        <p>You have indicated that you have had a history of depression and it’s important to look out for signs of depression so that you can address it early.</p>
                        <ul>
                            <li>Keep a mood diary</li>
                            <li>Exercise or doing things you enjoy are good tools to improve your mood.</li>
                        </ul>
                    </>
                ),
            },
        },
        mild_moderate: {
            // Pain
            non_significant: {
                summary: <>Based on your results, you may be <strong>at risk</strong> of experiencing persistent pain, but you have a <strong>low risk</strong> of opioid misuse.</>,
                pain: (
                    <>
                        <p>You are currently not experiencing high levels of pain. Monitoring your levels of pain is an important part of managing acute pain.</p>
                        <ul>
                            <li>Keep a pain diary</li>
                            <li>Use relaxation strategies such as yoga, physical activity and other medications</li>
                        </ul>
                    </>
                ),
                opioid: (
                    <>
                        <p>You are at low risk of developing an opioid use problem. This means you are less likely than others to develop an opioid use disorder.  But a number of people who have higher levels of depression also have higher levels of pain. Sometimes when you are feeling down and not enjoying aspects of your life you are more likely to experience pain more intensely and more likely to rely on opioid medications than if you were not feeling depressed.</p>
                        <ul>
                            <li>Monitor for any signs you might be misusing your opioids by using a medication diary</li>
                        </ul>
                    </>
                ),
                depression: (
                    <>
                        <p>You are currently experiencing mild to moderate levels of depression at the moment.</p>
                        <p>It’s important to look out for signs of depression so that you can address it early. When you find yourself feeling down or hopeless about things, start to monitor how you’re feeling and try using strategies that have worked for you in the past.</p>
                        <ul>
                            <li>Keep a mood diary</li>
                            <li>Exercise or doing things you enjoy are good tools to improve your mood.</li>
                        </ul>
                    </>
                ),
            },
            significant: {
                summary: <>Based on your results, you may be at risk of experiencing <strong>persistent</strong> pain and <strong>opioid misuse</strong>.</>,
                pain: (
                    <>
                        <p>You have indicated that you are experiencing acute pain.  A number of people who have more severe pain also have levels of depression. Sometimes when you are feeling down and not enjoying aspects of your life you are more likely to experience pain more intensely and more likely to rely on opioid medications than if you were not feeling depressed.</p>
                        <ul>
                            <li>Keep a pain diary</li>
                            <li>Use relaxation strategies such as yoga, physical activity and other medications</li>
                        </ul>
                    </>
                ),
                opioid: (
                    <>
                        <p>You are at low risk of developing an opioid use problem. This means you are less likely than others to develop an opioid use disorder.  But a number of people who have higher levels of depression and higher levels of pain are more likely to misuse opioids. Sometimes when you are feeling down you are more likely to experience pain more intensely and more likely to rely on opioid medications than if you were not feeling depressed or in pain.</p>
                        <ul>
                            <li>Monitor for any signs you might be misusing your opioids by using a medication diary</li>
                        </ul>
                    </>
                ),
                depression: (
                    <>
                        <p>You are currently experiencing mild to moderate levels of depression at the moment.</p>
                        <p>It’s important to look out for signs of depression so that you can address it early. When you find yourself feeling down or hopeless about things, start to monitor how you’re feeling and try using strategies that have worked for you in the past.</p>
                        <ul>
                            <li>Keep a mood diary</li>
                            <li>Exercise or doing things you enjoy are good tools to improve your mood.</li>
                        </ul>
                    </>
                ),
            },
        },
        severe_extremely_severe: {
            non_significant: {
                summary: <>Based on your results, your risk of depression is <strong>high</strong> and you may be <strong>at risk</strong> of experiencing persistent pain and opioid misuse.</>,
                pain: (
                    <>
                        <p>You are currently not experiencing high levels of pain. Once your depressive symptoms are more manageable, monitoring your levels of pain is an important part of managing acute pain.</p>
                        <ul>
                            <li>Keep a pain diary</li>
                            <li>Use relaxation strategies such as yoga, physical activity and other medications</li>
                        </ul>
                    </>
                ),
                opioid: (
                    <>
                        <p>You are at low risk of developing an opioid use problem. This means you are less likely than others to misuse opioids.  But having very high levels of depression is a risk factor for developing pain and misusing medications. Sometimes when you are feeling down and not enjoying aspects of your life you are more likely to experience pain more intensely and more likely to rely on opioid medications than if you were not feeling depressed.</p>
                        <ul>
                            <li>Monitor for any signs you might be misusing your opioids by using a medication diary</li>
                        </ul>
                    </>
                ),
                depression: (
                    <>
                        <p>You are experiencing severe levels of depression. It’s important to seek help and tell someone what you are going through. Please contact a health professional as soon as possible and seek help from or contact:</p>
                        <ul>
                            <li>Lifeline <a href="tel:131144">13 11 44</a></li>
                            <li><a href="https://www.suicidecallbackservice.org.au">Suicide call back service 24/7 counselling</a></li>
                            <li><a href="https://beyondblue.org.au">beyondblue</a></li>
                        </ul>
                    </>
                ),
            },
            significant: {
                summary: <>Based on your results, your risk of depression is <strong>high</strong> and you may be at risk of experiencing <strong>persistent</strong> pain and opioid misuse.</>,
                pain: (
                    <>
                        <p>You are currently experiencing high levels of pain.  A number of people who have high levels of depression also have more severe pain.  Once your depressive symptoms are more manageable, there are a number of strategies that could help you manage your pain and lower your risk of opioid misuse.</p>
                        <ul>
                            <li>Monitoring your levels of pain is an important part of managing acute pain. Keeping a pain diary and what you do such as what time you get pain, your mood and what activities and medications work is useful to recognize.</li>
                            <li>Use relaxation strategies such as yoga, physical activity and other medications</li>
                        </ul>
                    </>
                ),
                opioid: (
                    <>
                        <p>You are at low risk of developing an opioid use problem. This means you are less likely than others to misuse opioids.  But having very high levels of depression and high levels of pain are risk factors for misusing opioid medications. Sometimes when you are feeling down and not enjoying aspects of your life you are more likely to experience pain more intensely and more likely to rely on opioid medications than if you were not feeling depressed.</p>
                        <ul>
                            <li>Monitor for any signs you might be misusing your opioids by using a medication diary</li>
                        </ul>
                    </>
                ),
                depression: (
                    <>
                        <p>You are experiencing severe levels of depression. It’s important to seek help and tell someone what you are going through. Please contact a health professional as soon as possible and seek help from or contact:</p>
                        <ul>
                            <li>Lifeline <a href="tel:131144">13 11 44</a></li>
                            <li><a href="https://www.suicidecallbackservice.org.au">Suicide call back service 24/7 counselling</a></li>
                            <li><a href="https://beyondblue.org.au">beyondblue</a></li>
                        </ul>
                    </>
                ),
            },
        }
    },
    high: {
        normal: {
            non_significant: {
                summary: (
                    <>Based on your results, your risk of opioid misuse is <strong>high</strong>, but you risk of experiencing persistent pain is <strong>low</strong>.</>
                ),
                pain: (
                    <>
                        <p>You are currently not experiencing high levels of pain. Monitoring your levels of pain is an important part of managing acute pain.</p>
                        <ul>
                            <li>Keep a pain diary</li>
                            <li>Use relaxation strategies such as yoga, physical activity and other medications</li>
                        </ul>
                    </>
                ),
                opioid: (
                    <>
                        <p>Your results show that you have a number of risk factors which suggest you might be at risk of misusing opioids.  It is important to talk to your prescribing doctor about these risks so these risks can be managed should you need to use opioids. But the good news is that currently you do not have high levels of depression or pain at the moment. This is reassuring and suggests that you should not need to take opioids.</p>
                        <ul>
                            <li>Monitor for any signs you might be misusing your opioids by using a medication diary</li>
                        </ul>
                    </>
                ),
                depression: (
                    <>
                        <p>You have indicated that you have had a history of depression and it’s important to look out for signs of depression so that you can address it early. If you find yourself feeling down or hopeless about things, start to monitor how you’re feeling and try using strategies that have worked for you in the past.</p>
                        <ul>
                            <li>Keep a mood diary</li>
                            <li>Exercising or doing things you enjoy can really help improve your mood.</li>
                        </ul>
                    </>
                ),
            },
            significant: {
                summary: (
                    <>Based on your results, your risks of experiencing persistent pain and opioid misuse are <strong>high</strong>.</>
                ),
                pain: (
                    <>
                        <p>You are currently experiencing high levels of pain.  There are a number of strategies that could help you manage your pain and lower your risk of opioid misuse.</p>
                        <ul>
                            <li>Monitoring your levels of pain is an important part of managing acute pain. Keeping a pain diary and what you do such as what time you get pain, your mood and what activities and medications work is useful to recognize.</li>
                            <li>Use relaxation strategies such as yoga, physical activity and other medications</li>
                        </ul>
                    </>
                ),
                opioid: (
                    <>
                        <p>Your results show that you have a number of risk factors which suggest you might be at risk of misusing opioids.  It is important to talk to your prescribing doctor about these risks so these risks can be managed should you need to use opioids. But the good news is that currently you do not have high levels of depression or pain at the moment. This is reassuring and suggests that you should not need to take opioids.</p>
                        <ul>
                            <li>Monitor for any signs you might be misusing your opioids by using a medication diary</li>
                        </ul>
                    </>
                ),
                depression: (
                    <>
                        <p>You have indicated that you have had a history of depression and it’s important to look out for signs of depression so that you can address it early. If you find yourself feeling down or hopeless about things, start to monitor how you’re feeling and try using strategies that have worked for you in the past. </p>
                        <ul>
                            <li>Keep a mood diary</li>
                            <li>Exercising or doing things you enjoy can really help improve your mood.</li>
                        </ul>
                    </>
                ),
            },
        },
        mild_moderate: {
            non_significant: {
                summary: (
                    <>Based on your results, your risk of opioid misuse is <strong>high</strong> and you may be at risk of experiencing persistent pain.</>
                ),
                pain: (
                    <>
                        <p>You are currently not experiencing high levels of pain. Monitoring your levels of pain is an important part of managing acute pain.</p>
                        <ul>
                            <li>Keep a pain diary</li>
                            <li>Use relaxation strategies such as yoga, physical activity and other medications</li>
                        </ul>
                    </>
                ),
                opioid: (
                    <>
                        <p>Your results show that you have a number of risk factors which suggest you might be at risk of misusing opioids.  It is important to talk to your prescribing doctor about these risks so these risks can be managed should you need to use opioids. But the good news is that currently you do not have high levels of depression or pain at the moment. This is reassuring and suggests that you should not need to take opioids.</p>
                        <ul>
                            <li>Monitor for any signs you might be misusing your opioids by using a medication diary</li>
                        </ul>
                    </>
                ),
                depression: (
                    <>
                        <p>You are currently experiencing mild to moderate levels of depression at the moment.  It’s important to look out for signs of depression so that you can address it early. When you find yourself feeling down or hopeless about things, start to monitor how you’re feeling and try using strategies that have worked for you in the past.</p>
                        <ul>
                            <li>Keep a mood diary</li>
                            <li>Exercising or doing things you enjoy can really help improve your mood.</li>
                        </ul>
                    </>
                ),
            },
            significant: {
                summary: (
                    <>Based on your results, your risks of opioid misuse and experiencing persistent pain are <strong>high</strong>.</>
                ),
                pain: (
                    <>
                        <p>You are currently not experiencing high levels of pain. Monitoring your levels of pain is an important part of managing acute pain.</p>
                        <ul>
                            <li>Keep a pain diary</li>
                            <li>Use relaxation strategies such as yoga, physical activity and other medications</li>
                        </ul>
                    </>
                ),
                opioid: (
                    <>
                        <p>Your results show that you have a number of risk factors which suggest you might be at risk of misusing opioids.  It is important to talk to your prescribing doctor about these risks so these risks can be managed should you need to use opioids. </p>
                        <ul>
                            <li>Monitor for any signs you might be misusing your opioids by using a medication diary</li>
                            <li>Higher levels of pain suggest that other pain management strategies might be more beneficial such as exercise, yoga and mindfulness.</li>
                        </ul>
                    </>
                ),
                depression: (
                    <>
                        <p>You are currently experiencing mild to moderate levels of depression at the moment. It’s important to look out for signs of depression so that you can address it early. When you find yourself feeling down or hopeless about things, start to monitor how you’re feeling and try using strategies that have worked for you in the past.</p>
                        <ul>
                            <li>Keep a mood diary</li>
                            <li>Exercising or doing things you enjoy can really help improve your mood.</li>
                        </ul>
                    </>
                ),
            },
        }
    }
}