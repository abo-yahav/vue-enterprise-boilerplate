import Playground from './playground.vue'

describe('@views/playground', () => {
    it('is a valid view', () => {
        expect(Playground).toBeAViewComponentUsing({ user: { name: '' } })
    })

    it(`includes the provided user's name`, () => {
        const { element } = shallowMountView(Playground, {
            propsData: {
                user: { name: 'My Name' },
            },
        })

        expect(element.textContent).toMatch(/My Name\s+Playground/)
    })
})
