require('./styles/styles.scss');

const { cx, Locale } = require('@bsi-cx/design-build');

module.exports = cx.design
    .withTitle('Switch-LP')
    .withAuthor('BSI Business Systems Integration AG')
    .withDate('20.05.2022')
    .withPreviewImage('static/preview.png')
    .withDefaultLocale(Locale.EN)
    .withLocales(Locale.EN, Locale.DE)
    .withContentElementGroups(
        cx.contentElementGroup
            .withGroupId('layout')
            .withLabel('Layout')
            .withContentElements(
                require('./content-elements/layout/one-column-layout')
            ),
        cx.contentElementGroup
            .withGroupId('sections')
            .withLabel('Sections')
            .withContentElements(
                require('./content-elements/sections/header-with-logo'),
                require('./content-elements/sections/footer'),
                require('./content-elements/sections/form'),
                require('./content-elements/sections/agenda-table'),
                require('./content-elements/sections/info-table'),
                require('./content-elements/sections/section-title-text')
            ),
        cx.contentElementGroup
            .withGroupId('elements')
            .withLabel('Elements')
            .withContentElements(
                require('./content-elements/elements/blue-button'),
                require('./content-elements/elements/logo'),
                require('./content-elements/elements/footer-address'),
                require('./content-elements/elements/footer-link'),
                require('./content-elements/elements/footer-copyright'),
                require('./content-elements/elements/formatted-text'),
                require('./content-elements/elements/plain-text'),
                require('./content-elements/elements/title-h2'),
                require('./content-elements/elements/spacer-10'),
                require('./content-elements/elements/spacer-20'),
                require('./content-elements/elements/spacer-30'),
                require('./content-elements/elements/info-element'),
                require('./content-elements/elements/info-element-three-col'),
                require('./content-elements/elements/full-width-image'),
                require('./content-elements/elements/divider'),
                require('./content-elements/elements/info-ort-element'),
                require('./content-elements/elements/info-date-element')
            ),
        cx.contentElementGroup
            .withGroupId('form-elements')
            .withLabel('Form Elements')
            .withContentElements(
                // require('./content-elements/elements/form-elements/button'),
                require('./content-elements/elements/form-elements/checkbox'),
                require('./content-elements/elements/form-elements/email'),
                require('./content-elements/elements/form-elements/full-name'),
                require('./content-elements/elements/form-elements/organization'),
                require('./content-elements/elements/form-elements/radio-buttons'),
                require('./content-elements/elements/form-elements/name'),
                require('./content-elements/elements/form-elements/last-name'),
                require('./content-elements/elements/form-elements/dropdown')
            )
    )
    .withDropzones(
        cx.dropzone
            .withDropzone('header')
            .withAllowedElements(
                require('./content-elements/sections/header-with-logo')
            ),
        cx.dropzone.withDropzone('main').withAllowedElements(
            require('./content-elements/elements/blue-button'),
            require('./content-elements/sections/form'),
            require('./content-elements/layout/one-column-layout'),
            require('./content-elements/elements/spacer-10'),
            require('./content-elements/elements/spacer-20'),
            require('./content-elements/elements/spacer-30'),
            require('./content-elements/elements/formatted-text'),
            require('./content-elements/elements/plain-text'),
            require('./content-elements/elements/title-h2'),
            require('./content-elements/sections/agenda-table'),
            require('./content-elements/sections/info-table'),
            // require('./content-elements/elements/info-ort-element'),
            // require('./content-elements/elements/info-date-element'),
            require('./content-elements/elements/full-width-image'),
            require('./content-elements/elements/divider'),
            require('./content-elements/sections/section-title-text')
        ),
        cx.dropzone
            .withDropzone('footer')
            .withAllowedElements(require('./content-elements/sections/footer'))
    );
