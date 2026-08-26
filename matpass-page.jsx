const RIO = window.RioJiuJitsuDesignSystem_1c4407;
const { Button, Card, Badge, Divider, SectionHeading, Eyebrow, Input, Select } = RIO;

const PHONE = '945-269-010';

function Header() {
  return <header className="lp-head">
    <img src="assets/logo-mark-white.png" alt="Rio Jiu-Jitsu" className="lp-mark" />
    <div className="lp-head-r">
      <span className="lp-head-loc">6465 E. Mockingbird Lane. Suite 350. Dallas, Tx</span>
      <a className="lp-head-tel" href={'tel:' + PHONE.replace(/[^0-9]/g, '')}>{PHONE}</a>
    </div>
  </header>;
}

function HeroRotator() {
  return <div className="hero-stage">
    <video className="hero-vid" src="assets/hero-video.mp4" autoPlay muted loop playsInline poster="assets/photos/membership-grapple.png"></video>
  </div>;
}

function Hero() {
  return <section className="hero">
    <HeroRotator />
    <div className="hero-scrim"></div>
    <Header />
    <div className="hero-in">
      <div className="hero-copy">
        <Eyebrow tone="inverse">Rio Jiu-Jitsu Lifestyle &middot; The Mat Pass</Eyebrow>
        <h1 className="hero-h1">Two classes.<br />Twenty&#8209;five dollars.<br />No experience required.</h1>
        <p className="hero-sub">Rio Jiu-Jitsu in Lake Highlands. Walk in knowing nothing, leave knowing something. We&rsquo;ll lend you the gi.</p>
      </div>
      <div className="offer">
        <div className="offer-eb">New client offer</div>
        <div className="offer-price"><span className="offer-num">$25</span><span className="offer-unit">2 classes</span></div>
        <Divider tone="hairline" style={{ margin: '22px 0' }} />
        <ul className="offer-list">
          <li>Loaner gi included</li>
          <li>No contract, no sales pitch</li>
          <li>Book any adult class on the schedule</li>
        </ul>
        <Button size="lg" fullWidth href="#book" style={{ marginTop: 28 }}>Claim my mat pass</Button>
        <a className="offer-call" href={'tel:' + PHONE.replace(/[^0-9]/g, '')}>or call {PHONE}</a>
      </div>
    </div>
    <div className="proof">
      <div className="wrap proof-in">
        <span className="proof-i"><b>4.9</b> average &middot; 180+ Google reviews</span>
        <span className="proof-i"><b>13k</b> on Instagram</span>
        <span className="proof-i"><b>Open 7 days</b> &middot; classes morning and evening</span>
      </div>
    </div>
  </section>;
}

function Objections() {
  const items = [
  { q: '&ldquo;I&rsquo;m not in shape for this.&rdquo;', a: 'Neither was anyone here on day one. Conditioning is what Jiu-Jitsu gives you, not what it asks for.' },
  { q: '&ldquo;I&rsquo;ll get hurt.&rdquo;', a: 'Beginners drill with coaches and upper belts who have been doing this for a decade. Nobody is trying to win against you.' },
  { q: '&ldquo;I&rsquo;ve trained before.&rdquo;', a: 'Then come to an open mat instead. Tell us your belt when you book and we&rsquo;ll put you in the right room.' }];

  return <section className="band paper">
    <div className="wrap" data-comment-anchor="24e32e59c1-div-57-5">
      <SectionHeading size="section" as="h2">You don&rsquo;t need to be ready</SectionHeading>
      <div className="rule"></div>
      <p className="lede">Three things stop adults from booking a first class. None of them are about Jiu-Jitsu.</p>
      <div className="obj">
        {items.map((it, i) => <div className="obj-c" key={i}>
          <div className="obj-n">0{i + 1}</div>
          <h3 className="obj-q" dangerouslySetInnerHTML={{ __html: it.q }}></h3>
          <p className="obj-a" dangerouslySetInnerHTML={{ __html: it.a }}></p>
        </div>)}
      </div>
    </div>
  </section>;
}

function Benefits() {
  const b = [
  { i: 'improved-health', l: 'Improved health' },
  { i: 'self-control', l: 'Self-control' },
  { i: 'confidence-boost', l: 'Confidence boost' },
  { i: 'self-defense', l: 'Self-defense skills' }];

  return <section className="benefits">
    <div className="wrap benefits-in">
      {b.map((x) => <div className="ben" key={x.i}>
        <img src={'assets/icons/' + x.i + '.png'} alt="" className="ben-i" />
        <span className="ben-l">{x.l}</span>
      </div>)}
    </div>
  </section>;
}

function FirstClass() {
  const steps = [
  { t: 'Minutes 0–5', h: 'You arrive and someone knows your name', b: 'Shoes off at the mat edge. A coach walks you through where to change, hands you a loaner gi and shows you how to tie the belt.' },
  { t: 'Minutes 5–20', h: 'Warm-up, at your pace', b: 'Movement drills, not a fitness test. Stop when you need to. Water is by the door and nobody is counting.' },
  { t: 'Minutes 20–45', h: 'Two techniques, slowly, with a partner', b: 'One escape and one control position. You will practise both with an upper belt who has taught them a hundred times.' },
  { t: 'Minutes 45–60', h: 'Light practice, then a handshake', b: 'Positional rounds at whatever intensity you choose. Beginners are never thrown into open rolling on day one.' }];

  return <section className="band muted">
    <div className="wrap">
      <Eyebrow tone="muted">What you are actually signing up for</Eyebrow>
      <SectionHeading size="section" as="h2" style={{ marginTop: 'var(--space-4)' }}>Your first class, minute by minute</SectionHeading>
      <div className="rule"></div>
      <div className="fc">
        {steps.map((s, i) => <div className="fc-r" key={i}>
          <div className="fc-t">{s.t}</div>
          <div className="fc-b">
            <h3 className="fc-h">{s.h}</h3>
            <p className="fc-p">{s.b}</p>
          </div>
        </div>)}
      </div>
    </div>
  </section>;
}

function Voices() {
  const t = [
  { q: 'I put it off for two years because I thought I had to get fit first. Six months in, the training is the fitness. I stopped needing the excuse.', n: 'Marcus D.', m: 'Blue belt &middot; training 14 months' },
  { q: 'Nobody tried to smash me on my first night. The upper belts slowed everything down until I understood it. That is why I came back.', n: 'Kevin A.', m: 'White belt &middot; training 5 months' },
  { q: 'I came in with four years of experience from another city and they put me straight into the right room. No ego about where I learned it.', n: 'Tobias R.', m: 'Purple belt &middot; training 6 years' }];

  return <section className="band paper">
    <div className="wrap">
      <SectionHeading size="section" as="h2">Adults who started where you are</SectionHeading>
      <div className="rule"></div>
      <div className="vo">
        {t.map((x, i) => <figure className="vo-c" key={i}>
          <blockquote className="vo-q">{x.q}</blockquote>
          <figcaption className="vo-n">{x.n}<span className="vo-m" dangerouslySetInnerHTML={{ __html: x.m }}></span></figcaption>
        </figure>)}
      </div>
    </div>
  </section>;
}

function Coaches() {
  const [video, setVideo] = React.useState(null);
  const [bioOpen, setBioOpen] = React.useState(false);
  React.useEffect(() => {
    const k = e => { if (e.key === 'Escape') setVideo(null); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);
  const c = [
  { n: 'Rafael Lang', b: 'Founder and head instructor', l: '30 years of Brazilian Jiu-Jitsu, beginning his journey in 1995. His impressive achievements include 2022 No-Gi Pans Jiu-Jitsu Gold Medal, the 2021 IBJJF Master Worlds Gold Medal, and two 2020 Pan Ams Gi Silvers, including one Silver in the absolute division. Rafael is also a multiple-time Submission Hunter Pro Heavyweight Gi Belt Holder, a Brazilian National Champion, and a seasoned veteran of Fight2Win and Kasai Pro. In addition to competing, Rafael has spent time training the Australian Army and Dallas police force. His extensive background and numerous accolades make him a distinguished leader and mentor in our gym.', y: 'Teaching since 1995 &middot; head instructor', id: 'coach-1', p: 'assets/photos/coach-rafael-lang.jpg', v: 'Get7qt2TwMs' },
  { n: 'Stephen Hall', b: '4th Degree Black Belt', l: '', y: '', id: 'coach-2', v: '0LoyNFVrfes' },
  { n: 'Nick Reding', b: '4th Degree Black Belt', l: '', y: '', id: 'coach-3', v: 'ezB-GpTQh_0' }];

  return <section className="band paper" style={{ paddingTop: 0 }}>
    <div className="wrap coach-grid" data-comment-anchor="c7a110b474-div-141-5">
      <div>
        <Eyebrow tone="muted">Who is on the mat with you</Eyebrow>
        <SectionHeading size="section" as="h2" style={{ marginTop: 'var(--space-4)' }}>Meet your coaches</SectionHeading>
        <div className="rule"></div>
        <div className="co">
          {c.map((x, i) => <div className="co-r" key={i}>
            <image-slot class="co-ph" id={x.id} shape="rect" fit="cover" src={x.p} placeholder="Coach photo"></image-slot>
            <div><div className="co-n">{x.n}</div>
            <div className="co-b">{x.b}</div>
            {x.l && <div><div className={'co-l' + (x.v === 'Get7qt2TwMs' && !bioOpen ? ' is-clamped' : '')} dangerouslySetInnerHTML={{ __html: x.l }}></div>
              {x.v === 'Get7qt2TwMs' && <button type="button" className="co-more" onClick={() => setBioOpen(o => !o)}>{bioOpen ? 'Show less' : 'Read more'}</button>}</div>}
            {x.y && <div className="co-y" dangerouslySetInnerHTML={{ __html: x.y }}></div>}
            {x.v && <button type="button" className="co-play" onClick={() => setVideo(x.v)}><span className="co-play-tri"></span>Watch {x.n.split(' ')[0]} roll</button>}</div>
          </div>)}
        </div>
      </div>
      <div className="roster">
        <div className="roster-eb">The rest of the staff</div>
        <div className="roster-l">
          {[
          ['David Binswager', '3rd Degree Black Belt'],
          ['Alex More', '1st Degree Black Belt'],
          ['Drew Abbey', 'Black Belt'],
          ['Patrick Grinnan', 'Black Belt'],
          ['Ramtin Nikzad', 'Black Belt'],
          ['Anthony Puddu', 'Black Belt'],
          ['Manuel Suero', 'Black Belt'],
          ['Sandra Sutherland', 'Black Belt'],
          ['Ted Gates', 'Brown Belt'],
          ['Noah Martin', 'Brown Belt'],
          ['Mike King', 'Boxing Coach, Blue Belt (Jiu Jitsu)'],
          ['David Bertolino', 'Wrestling Coach, Blue Belt (Jiu Jitsu)']].map(([n, b]) => <div className="roster-r" key={n}>
            <span className="roster-n">{n}</span>
            <span className="roster-b">{b}</span>
          </div>)}
        </div>
        <div className="roster-mem">
          <div className="roster-n">Octavio Couto</div>
          <p>In honor and memory of Octavio Couto &ldquo;Ratinho&rdquo; whos values and knowledge will never be forgotten.</p>
        </div>
      </div>
    </div>
    {video && <div className="vid-ov" onClick={() => setVideo(null)}>
      <div className="vid-box" onClick={e => e.stopPropagation()}>
        <button type="button" className="vid-x" onClick={() => setVideo(null)} aria-label="Close video">Close</button>
        <iframe src={'https://www.youtube.com/embed/' + video + '?autoplay=1&rel=0'} title="Rafael Lang" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen frameBorder="0"></iframe>
      </div>
    </div>}
  </section>;
}

function Schedule() {
  const rows = [
  ['Monday', '6:00am Fundamentals', '12:00pm No-Gi', '6:30pm Fundamentals', '7:45pm Open mat'],
  ['Tuesday', '6:00am No-Gi', '—', '6:30pm Advanced', '7:45pm Sparring'],
  ['Wednesday', '6:00am Fundamentals', '12:00pm Fundamentals', '6:30pm Fundamentals', '7:45pm Open mat'],
  ['Thursday', '6:00am No-Gi', '—', '6:30pm Advanced', '7:45pm Sparring'],
  ['Friday', '6:00am Fundamentals', '12:00pm No-Gi', '6:30pm Fundamentals', '—'],
  ['Saturday', '9:00am Fundamentals', '10:30am Open mat', '—', '—'],
  ['Sunday', '10:00am Open mat', '—', '—', '—']];

  return <section className="band muted">
    <div className="wrap">
      <SectionHeading size="section" as="h2">Adult schedule</SectionHeading>
      <div className="rule"></div>
      <p className="lede">Only the adult classes are listed. Your mat pass is good for any two of them, and <strong>Fundamentals</strong> is the right place to use the first one.</p>
      <div className="sc-scroll">
        <table className="sc">
          <tbody>{rows.map((r, i) => <tr key={i}>{r.map((cell, j) =>
              <td key={j} className={j === 0 ? 'sc-d' : cell === '—' ? 'sc-off' : ''}>{cell}</td>)}</tr>)}
          </tbody>
        </table>
      </div>
      <p className="note">Doors open 30 minutes before every class. Arrive 15 minutes early on your first visit so a coach can get you set up.</p>
    </div>
  </section>;
}

function Faq() {
  const qs = [
  ['Do I need my own gi?', 'No. We lend you a clean gi for both classes on your mat pass. If you decide to keep training, we will point you at the right one to buy rather than sell you ours.'],
  ['What if I am not fit enough?', 'There is no fitness requirement and no test. You set your own pace in the warm-up and in practice rounds, and the coach will tell you when to sit one out.'],
  ['Will I get injured?', 'Jiu-Jitsu has no striking. Beginners drill with coaches and upper belts, at slow speed, with taps respected immediately. Bruises happen; injuries are rare and we take them seriously.'],
  ['Can I use both classes in one week?', 'Yes, or spread them over a month. Book the first one online and we will schedule the second with you after class.'],
  ['What happens after the two classes?', 'We talk, once. Memberships run month to month with no contract, and if it is not for you, that is a completely acceptable answer.'],
  ['Is there parking?', 'Free surface parking at the Suite 350 entrance on E. Mockingbird Lane. The mat is on the ground floor.']];

  const [open, setOpen] = React.useState(0);
  return <section className="band paper">
    <div className="wrap faq-wrap">
      <SectionHeading size="section" as="h2">Questions adults actually ask</SectionHeading>
      <div className="rule"></div>
      <div className="faq">
        {qs.map(([q, a], i) => <div className={'faq-r' + (open === i ? ' on' : '')} key={i}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{q}</span><span className="faq-s">{open === i ? '–' : '+'}</span>
          </button>
          {open === i && <p className="faq-a">{a}</p>}
        </div>)}
      </div>
    </div>
  </section>;
}

function GymMap() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!window.L || !ref.current) return;
    const map = window.L.map(ref.current, { center: [32.8377, -96.7462], zoom: 14, scrollWheelZoom: false, zoomControl: false, attributionControl: true });
    window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
    window.L.circleMarker([32.8377, -96.7462], { radius: 8, color: '#ffffff', weight: 2, fillColor: '#000000', fillOpacity: 1 }).addTo(map);
    return () => map.remove();
  }, []);
  return <div className="map" data-comment-anchor="d494cb02dc-img-225-11">
    <div className="map-canvas" ref={ref}></div>
    <span className="map-lab">Map &middot; Lake Highlands, Dallas</span>
  </div>;
}

function Book() {
  return <section className="band ink" id="book">
    <div className="wrap book-grid">
      <div>
        <Eyebrow tone="inverse">Step one of one</Eyebrow>
        <h2 className="book-h">Claim the $25 mat pass</h2>
        <p className="book-p">Two classes, loaner gi, no contract. Pick a class now or leave us your details and a coach will call you today to find one that fits.</p>
        <div className="book-meta">
          <div><span className="bm-k">Where</span><span className="bm-v">6465 E. Mockingbird Lane.<br />Suite 350. Dallas, Tx</span></div>
          <div><span className="bm-k">Phone</span><a className="bm-v bm-tel" href={'tel:' + PHONE.replace(/[^0-9]/g, '')}>{PHONE}</a></div>
        </div>
        <GymMap />
      </div>
      <Card tone="paper" padding="var(--space-7)" style={{ alignSelf: 'start' }}>
        <div className="bf-eb">Book your first class</div>
        <div className="bf">
          <Input label="First name" placeholder="Marcus" />
          <Input label="Mobile" type="tel" placeholder="(214) 555-0100" />
          <Input label="Email" type="email" placeholder="you@email.com" />
          <Select label="Which class do you want first?" options={[
          { value: 'a', label: 'Fundamentals — weekday 6:30pm' },
          { value: 'b', label: 'Fundamentals — weekday 6:00am' },
          { value: 'c', label: 'Fundamentals — Saturday 9:00am' },
          { value: 'd', label: 'No-Gi — weekday 12:00pm' },
          { value: 'e', label: 'I have trained before — open mat' }]
          } />
          <Button size="lg" fullWidth style={{ marginTop: 8 }}>Pay $25 and book</Button>
          <p className="bf-note">Wodify booking embed sits here in the build. <span className="mono">utm_source</span> and <span className="mono">gclid</span> pass through as hidden fields.</p>
        </div>
      </Card>
    </div>
  </section>;
}

function StickyBar() {
  return <div className="sticky">
    <a className="sticky-call" href={'tel:' + PHONE.replace(/[^0-9]/g, '')}>Call</a>
    <a className="sticky-cta" href="#book">Claim $25 mat pass</a>
  </div>;
}

function MatPassPage() {
  return <React.Fragment>
    <Hero />
    <Objections />
    <Benefits />
    <FirstClass />
    <Voices />
    <Coaches />
    <Schedule />
    <Faq />
    <Book />
    <footer className="lp-foot">
      <div className="wrap lp-foot-in">
        <img src="assets/logo-mark-white.png" alt="Rio Jiu-Jitsu" className="lp-foot-mark" />
        <span>Rio Jiu-Jitsu Lifestyle &middot; Lake Highlands, Dallas &middot; Jiu-Jitsu goes beyond the mat.</span>
      </div>
    </footer>
    <StickyBar />
  </React.Fragment>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<MatPassPage />);
