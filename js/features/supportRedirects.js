import { on, trigger } from "@/hooks"
import { shouldRedirectUsingNavigateOr } from "./supportNavigate"

on('effects', (component, effects) => {
    if (! effects['redirect']) return

    let url = effects['redirect']

    shouldRedirectUsingNavigateOr(effects, url, () => {
        window.location.href = url
    })
})
