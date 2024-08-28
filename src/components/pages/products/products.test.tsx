import React from "react"
import Products from "./Products"
import { render } from "@testing-library/react"
import { expect } from "vitest"
import TestComponentWrapper from "../../../mocks/TestComponentWrapper"

const MockProducts = () => (

    <TestComponentWrapper>
        <Products/>
    </TestComponentWrapper>

)

describe('testing the products section', (() => {

    test('tes', () => {
        render( <MockProducts />)
        expect(true).toBeTruthy()
    })
}))
const b = { "fields": { "name": "Sports Sneakers Off White & Red", "price": 89500, "description": "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.", "images": [{ "metadata": { "tags": [] }, "sys": { "space": { "sys": { "type": "Link", "linkType": "Space", "id": "6hoi4gahctlw" } }, "id": "1J4cJy6qSLZwlhPmtOgzdq", "type": "Asset", "createdAt": "2024-07-04T05:41:23.678Z", "updatedAt": "2024-07-04T05:41:23.678Z", "environment": { "sys": { "id": "master", "type": "Link", "linkType": "Environment" } }, "revision": 1, "locale": "en-US" }, "fields": { "description": "", "file": { "url": "//images.ctfassets.net/6hoi4gahctlw/1J4cJy6qSLZwlhPmtOgzdq/442a95161d04c10bdd713828af3b04ec/3__3_.png", "details": { "size": 2206753, "image": { "width": 2048, "height": 2048 } }, "fileName": "3 (3).png", "contentType": "image/png" } } }, { "metadata": { "tags": [] }, "sys": { "space": { "sys": { "type": "Link", "linkType": "Space", "id": "6hoi4gahctlw" } }, "id": "5XXrecW8IkpGq5Tkk9nxMz", "type": "Asset", "createdAt": "2024-07-04T05:42:15.294Z", "updatedAt": "2024-07-04T05:42:15.294Z", "environment": { "sys": { "id": "master", "type": "Link", "linkType": "Environment" } }, "revision": 1, "locale": "en-US" }, "fields": { "description": "", "file": { "url": "//images.ctfassets.net/6hoi4gahctlw/5XXrecW8IkpGq5Tkk9nxMz/7e03ceddd807c68fabd6cccf2aa65fe3/2__2_.png", "details": { "size": 2527114, "image": { "width": 2048, "height": 2048 } }, "fileName": "2 (2).png", "contentType": "image/png" } } }, { "metadata": { "tags": [] }, "sys": { "space": { "sys": { "type": "Link", "linkType": "Space", "id": "6hoi4gahctlw" } }, "id": "4tIfISXjBwuhObNWQ2LNNO", "type": "Asset", "createdAt": "2024-07-04T05:42:44.834Z", "updatedAt": "2024-07-04T05:48:03.319Z", "environment": { "sys": { "id": "master", "type": "Link", "linkType": "Environment" } }, "revision": 2, "locale": "en-US" }, "fields": { "description": "", "file": { "url": "//images.ctfassets.net/6hoi4gahctlw/4tIfISXjBwuhObNWQ2LNNO/a4cb73deea89a2a279649b5079a9fd8c/1__3_.png", "details": { "size": 1706750, "image": { "width": 2048, "height": 2048 } }, "fileName": "1 (3).png", "contentType": "image/png" } } }], "type": "Shoe" } }