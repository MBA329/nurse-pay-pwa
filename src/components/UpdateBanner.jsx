import { useRegisterSW } from 'virtual:pwa-register/react'
export default function UpdateBanner() { const { needRefresh: [needRefresh], updateServiceWorker } = useRegisterSW(); return needRefresh ? <div className="update-banner" role="status">Update available <button onClick={() => updateServiceWorker(true)}>Tap to refresh</button></div> : null }
