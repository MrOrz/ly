import React, { useRef, useCallback, useState } from 'react';
import styled from '@emotion/styled';

import MessageInput from './components/MessageInput';
import LegislatorSections from './components/LegislatorSections';
import SpinningIcon from './components/SpinningIcon';
import Divider from './components/Divider';
import Notice from './components/Notice';

import useIntersectionObserver from './lib/useIntersectionObserver';
import StartButton from './components/StartButton';
import MessageTemplates from './components/MessageTemplates';
import SendTypeSwitch from './components/SendTypeSwitch';
import Jumbotron from './components/Jumbotron';
import Emphasis from './components/Emphasis';

const PageContainer = styled.div`
  padding: 40px;
  max-width: 720px;
  margin: 0 auto;
`;

const Header = React.memo(() => (
  <Jumbotron>
    <SpinningIcon icons={['🏠', '👨‍👨‍👧‍👦', '🏠', '👩‍👩‍👧‍👦', '🏠', '👨‍👩‍👧‍👦']} />
    <h1>
      我<Emphasis>愛家</Emphasis>・我聯絡
    </h1>
    <h2>平權立院鍵盤陳情</h2>
  </Jumbotron>
));

const Footer = styled.footer`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  padding-bottom: 64px;
`;

function SettingsPage({
  msg = '',
  onMsgChange = () => {},
  legislators = [],
  selectedLegislatorIds = [],
  doneLegislatorMap = {},
  onSelectionChange = () => {},
  sendType = '',
  onSendTypeChange = () => {},
  onSubmit = () => {},
}) {
  const selectionSectionRef = useRef(null);
  const [isSelectionInView, setSelectionInView] = useState(false);

  const handleNextClick = useCallback(
    () =>
      selectionSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }),
    [selectionSectionRef]
  );

  const handleSelectionIntersect = useCallback(
    entries => {
      if (entries[0].isIntersecting) {
        setSelectionInView(true);
      } else {
        setSelectionInView(false);
      }
    },
    [setSelectionInView]
  );

  const handleMessageAdd = useCallback(
    selectedMsg => {
      onMsgChange(`${msg}\n\n${selectedMsg}`);
    },
    [msg, onMsgChange]
  );

  useIntersectionObserver(selectionSectionRef, handleSelectionIntersect);

  return (
    <PageContainer>
      <Header />
      <section>
        <p>
          讓同志能夠<Emphasis>結婚</Emphasis>成家，就是「愛家」的表現。
          在行政院專法通過之後，讓我們動動手指頭，不分異同地向立法委員們分享我們
          <Emphasis>同志可以結婚</Emphasis>的喜悅！
        </p>
        <Divider />
        <h3>你想要怎麼陳情？</h3>
        <SendTypeSwitch value={sendType} onChange={onSendTypeChange} />
        {sendType === 'tel' && (
          <Notice style={{ marginLeft: 0, marginRight: 0 }}>
            請在公務人員的上班時間撥打。若為午休時間（12:00~13:30），可以加句「不好意思打擾您午休」。
          </Notice>
        )}

        <label>
          <h3>你想要跟委員們說什麼呢？</h3>
          <MessageTemplates onSelect={handleMessageAdd} />
          <MessageInput
            value={msg}
            onChange={e => onMsgChange(e.target.value)}
            rows={5}
            autoFocus
          />
        </label>
        <p
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: 0,
          }}
        >
          <span style={{ fontSize: 12, opacity: 0.88 }}>
            ＊ 不知如何下筆？參考
            <a
              href={process.env.REACT_APP_REFERENCE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              這些範例
            </a>
            ，加入你的個人背景與觀察（如：有同事是同志），會更有說服力唷！
          </span>
          <button
            style={{ flexShrink: 0, marginLeft: '8px' }}
            type="button"
            onClick={handleNextClick}
          >
            下一步
          </button>
        </p>
      </section>

      <section ref={selectionSectionRef}>
        <Divider />
        <h3>請選擇要陳情的立委</h3>
        <LegislatorSections
          legislators={legislators || []}
          selectedLegislatorIds={selectedLegislatorIds}
          doneLegislatorMap={doneLegislatorMap}
          onSelectionChange={onSelectionChange}
        />
        <StartButton
          show={isSelectionInView}
          selectedLegislatorIds={selectedLegislatorIds}
          doneLegislatorMap={doneLegislatorMap}
          onClick={onSubmit}
          sendType={sendType}
        />
      </section>
      <Footer>
        <Divider content="🏳️‍🌈" />

        <p>
          此工具為
          <a href="https://www.facebook.com/groups/answerfamily/">
            《我愛家我解惑 - 平權社會對話工程》社群
          </a>
          參與者提供之
          <a href="https://github.com/answerfamily/ly">開放原始碼</a>
          專案。若有任何問題或建議，請來信至{' '}
          <a href="mailto:cofacts@googlegroups.com">Cofacts 聯絡信箱</a>。
        </p>

        <p>
          資料來源：
          <a
            href="http://equallove.tw/articles/200"
            target="_blank"
            rel="noopener noreferrer"
          >
            婚姻平權大平台委員 FB 名冊
          </a>
          、
          <a
            href="https://www.pridewatch.tw/beta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PrideWatch Taiwan 同志人權立場觀測站
          </a>
          、
          <a
            href="https://github.com/g0v/ly-tel"
            target="_blank"
            rel="noopener noreferrer"
          >
            g0v 立委聯絡資訊專案
          </a>
        </p>

        <p>
          Background icons:{' '}
          <a
            href="https://thenounproject.com/nookfulloption/collection/space2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Space2
          </a>{' '}
          by Nook Fulloption from the Noun Project
        </p>
      </Footer>
    </PageContainer>
  );
}

export default SettingsPage;
