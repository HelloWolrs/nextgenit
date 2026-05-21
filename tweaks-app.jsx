// Tweaks app for Next-Gen-IT.html — controls the eye + orbit.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "innerSpeed": 2.5,
  "outerSpeed": -1.2,
  "paused": false,
  "irisSize": 78,
  "halo": 100,
  "pulseRate": 1,
  "showOuterRing": true,
  "showBadges": true,
  "showLegend": true
}/*EDITMODE-END*/;

function NGITTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Mirror state into window.__tweaks for the vanilla JS loop to read,
  // and apply discrete DOM changes (visibility, iris size, halo opacity).
  React.useEffect(() => {
    window.__tweaks = t;

    const outerOrbit = document.getElementById('outer-orbit');
    const outerRing  = document.getElementById('outer-ring-circle');
    const outerGuide = document.getElementById('outer-ring-guide');
    [outerOrbit, outerRing, outerGuide].forEach(el => {
      if (el) el.style.display = t.showOuterRing ? '' : 'none';
    });

    const badges = document.getElementById('corner-badges');
    if (badges) badges.style.display = t.showBadges ? '' : 'none';

    const legend = document.querySelector('.agent-legend');
    if (legend) legend.style.display = t.showLegend ? '' : 'none';

    const irisCircle = document.getElementById('iris-circle');
    if (irisCircle) irisCircle.setAttribute('r', t.irisSize);

    const halo = document.getElementById('eye-halo');
    if (halo) halo.style.opacity = String((t.halo || 0) / 100);
  }, [t]);

  return (
    <TweaksPanel title="Eye & Orbit">
      <TweakSection label="Orbits" />
      <TweakSlider label="Inner speed" value={t.innerSpeed}
        min={-10} max={10} step={0.5} unit="°/s"
        onChange={(v) => setTweak('innerSpeed', v)} />
      <TweakSlider label="Outer speed" value={t.outerSpeed}
        min={-10} max={10} step={0.5} unit="°/s"
        onChange={(v) => setTweak('outerSpeed', v)} />
      <TweakToggle label="Pause rotation" value={t.paused}
        onChange={(v) => setTweak('paused', v)} />

      <TweakSection label="ACP Core" />
      <TweakSlider label="Core size" value={t.irisSize}
        min={50} max={120} step={1} unit="px"
        onChange={(v) => setTweak('irisSize', v)} />
      <TweakSlider label="Halo glow" value={t.halo}
        min={0} max={100} step={5} unit="%"
        onChange={(v) => setTweak('halo', v)} />

      <TweakSection label="Data flow" />
      <TweakSlider label="Pulse rate" value={t.pulseRate}
        min={0.3} max={3} step={0.1} unit="×"
        onChange={(v) => setTweak('pulseRate', v)} />

      <TweakSection label="Display" />
      <TweakToggle label="Outer ring + clients" value={t.showOuterRing}
        onChange={(v) => setTweak('showOuterRing', v)} />
      <TweakToggle label="Corner badges" value={t.showBadges}
        onChange={(v) => setTweak('showBadges', v)} />
      <TweakToggle label="Legend" value={t.showLegend}
        onChange={(v) => setTweak('showLegend', v)} />
    </TweaksPanel>
  );
}

const __ngitRoot = ReactDOM.createRoot(document.getElementById('tweaks-root'));
__ngitRoot.render(<NGITTweaks />);
