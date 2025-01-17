export const forms = [
    {
        title: "Catégorie 1",
        subcategories: [
            {
                title: "Nom&Age",
                schema: {
                    type: "object",
                    properties: {
                        nom: { type: "string" },
                        age: { type: "number" },
                    },
                    required: ["nom", "age"],
                },
                uischema: {
                    type: "VerticalLayout",
                    elements: [
                        {
                            type: "Control",
                            scope: "#/properties/nom",
                        },
                        {
                            type: "Control",
                            scope: "#/properties/age",
                        },
                    ],
                },
                data: {
                    nom: "John Doe",
                    age: 30,
                },
            },
            {
                title: "Email&Detail",
                schema: {
                    type: "object",
                    properties: {
                        email: { type: "string", format: "email" },
                        subscribed: { type: "boolean" },
                    },
                    required: ["email"],
                },
                uischema: {
                    type: "VerticalLayout",
                    elements: [
                        {
                            type: "Control",
                            scope: "#/properties/email",
                        },
                        {
                            type: "Control",
                            scope: "#/properties/subscribed",
                        },
                    ],
                },
                data: {
                    email: "example@example.com",
                    subscribed: true,
                },
            },
            {
                title: "Description",
                schema: {
                    type: "object",
                    properties: {
                        description: { type: "string" },
                    },
                    required: ["description"],
                },
                uischema: {
                    type: "VerticalLayout",
                    elements: [
                        {
                            type: "Control",
                            scope: "#/properties/description",
                        }
                    ],
                },
                data: {
                    description: "lorem eirjoeizrjncneizcrbzey",
                },
            }
        ],
    },
    {
        title: "Catégorie 2",
        subcategories: [
            {
                title: "Adresse&Telephone",
                schema: {
                    type: "object",
                    properties: {
                        adresse: { type: "string" },
                        telephone: { type: "string" },
                    },
                    required: ["adresse", "telephone"],
                },
                uischema: {
                    type: "VerticalLayout",
                    elements: [
                        {
                            type: "Control",
                            scope: "#/properties/adresse",
                        },
                        {
                            type: "Control",
                            scope: "#/properties/telephone",
                        },
                    ],
                },
                data: {
                    adresse: "123 Main St",
                    telephone: "123-456-7890",
                },
            },
            {
                title: "Coordonnées",
                schema: {
                    type: "object",
                    properties: {
                        pays: { type: "string" },
                        ville: { type: "string" },
                    },
                    required: ["pays", "ville"],
                },
                uischema: {
                    type: "VerticalLayout",
                    elements: [
                        {
                            type: "Control",
                            scope: "#/properties/pays",
                        },
                        {
                            type: "Control",
                            scope: "#/properties/ville",
                        },
                    ],
                },
                data: {
                    pays: "France",
                    ville: "Paris",
                },
            },
        ],
    },
];
