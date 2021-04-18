import { FC } from 'react';

import { PageLayout } from 'layouts/Page';

const UsesPage: FC = () => (
  <PageLayout title="Uses">
    <p>
      Following <a href="https://wesbos.com/">Wes Bos</a>&apos; idea I decided to create a{' '}
      <code>/uses</code> page to share my current setup. Go check out{' '}
      <a href="https://uses.tech/">uses.tech</a> to see a bunch of cool setups.
    </p>
    <h2>Editor</h2>
    <p>
      My default editor is <a href="https://www.jetbrains.com/webstorm/">WebStorm</a> which I have
      been using regularly since 2016. I don&apos;t add a bunch of plugins to Webstorm since I think
      the bundled ones are pretty good, but I always install the{' '}
      <a href="https://plugins.jetbrains.com/plugin/10044-atom-material-icons">
        Atom Material Icons
      </a>{' '}
      because I like how they look 😎. I also use{' '}
      <a href="https://code.visualstudio.com/">Visual Studio Code</a> when I need to do a quick
      modification on a different project or if I am running 2+ projects in parallel.
    </p>
    <h2>Terminal</h2>
    <p>
      For terminal I am using <a href="https://hyper.is/">Hyper</a>, after many years with iTerm2. I
      use the Nord theme and a few plugins: <a href="https://hyper.is/store/hypercwd">hypercwd</a>,{' '}
      <a href="https://hyper.is/store/hyper-search">hyper-search</a>,
      <a href="https://hyper.is/store/hyper-tabs-enhanced">hyper-tabs-enhanced</a>,{' '}
      <a href="https://github.com/cwspear/hyperterm-visor">hyperterm-visor</a>, and{' '}
      <a href="https://www.npmjs.com/package/hyperlinks">hyperlinks</a>.
    </p>
    <h2>Font & Theme</h2>
    <p>
      My preferred theme currently is <a href="https://www.nordtheme.com/">Nord</a>, which I started
      to use in October 2020 (was already feeling the winter chill ❄️). Before it I have been a huge
      fan of <a href="https://draculatheme.com/">Dracula</a> and I occasionally switch between them.
    </p>
    <p>
      My font of choice is <a href="https://gumroad.com/l/dank-mono">Dank Mono</a>, which I bought a
      few years ago. It has very good ligatures and is pleasant to look at. Recently I have been
      using <a href="https://www.jetbrains.com/lp/mono/">JetBrains Mono</a> in WebStorm and I am
      satisfied with it.
    </p>
    <h2>Desktop Apps</h2>
    <p>
      I love <a href="https://www.alfredapp.com/">Alfred</a> app, I have been using it for a long
      time and it is always one of the first things I install when I set up a new machine.
    </p>
    <p>
      I use <a href="https://justgetflux.com/">f.lux</a> to manage the brightness of my screens, it
      really shines (🙈) in the late afternoon/evening with the automatic adjustments.
    </p>
    <p>
      For the window management, I use <a href="https://www.spectacleapp.com/">Spectacle</a>. It has
      useful shortcuts and it is simple to reorganize the windows on the screen.
    </p>
    <p>
      My preferred color picker is <a href="https://colorslurp.com/">ColorSlurp</a>. It is easy to
      use and allows you to group colors together within collections.
    </p>
    <p>
      One of the tools I started to use recently, due to the remote working is{' '}
      <a href="https://unclack.app/#/">Unclack</a>. It mutes my mic as I start typing, which I think
      is very useful to take notes during meetings.
    </p>
    <p>
      I also use <a href="https://matthewpalmer.net/rocket/">Rocket</a> as the system-wide emoji
      picker.
    </p>
    <p>
      For my backups I am currently using <a href="https://onedrive.live.com/">OneDrive</a>. I used
      Dropbox for a long time, but sharing stuff between 2 accounts became harder and costly. So far
      I have no complains about OneDrive and the family plan works well.
    </p>
    <h2>Desk Setup</h2>
    <p>
      My desk and chair are some standard office models that I got for free from my previous
      employer. I don&apos;t know which are the models, they aren&apos;t fancy but they work well.
    </p>
    <p>
      I have one external monitor which is a{' '}
      <a href="https://www.amazon.de/gp/product/B07NPHZQTP/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1">
        {' '}
        AOC 32&quot; curved gaming monitor
      </a>
      . It&apos;s focused on gaming, but works pretty well to code and it&apos;s also great to watch
      movies.
    </p>
    <p>
      I have a JBL Everest headphone which is going into it&apos;s 5th anniversary and still working
      pretty well. It doesn&apos;t have noise cancelling, which is something I might consider for a
      future model.
    </p>
  </PageLayout>
);

export default UsesPage;
