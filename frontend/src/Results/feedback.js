import React from 'react';

export default {
    // Risk
    low: {
        // Depression
        normal: {
            // Pain
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
                summary: <>Based on your results, you may be at risk of <strong>experiencing persistent pain</strong>, but you have a <strong>low risk</strong> of opioid misuse.</>,
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
        }
    },


}