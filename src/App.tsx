import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import { materialRenderers } from "@jsonforms/material-renderers";
import { Button, Drawer, Space, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons"; // Icônes Ant Design
import "./App.css";
import { forms } from "./schemas/forms"; // Vos formulaires organisés par catégories

const CategorizationRenderer = ({ schema, uischema, data, renderers, onChange }: any) => {
    return (
        <div className="categorization-renderer">
            {uischema.elements.map((element: any, index: number) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                    <JsonForms
                        schema={schema}
                        uischema={element}
                        data={data}
                        renderers={renderers}
                        onChange={onChange}
                    />
                </div>
            ))}
        </div>
    );
};

const App: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [selectedForm, setSelectedForm] = useState<{ categoryIndex: number; formIndex: number }>({ categoryIndex: 0, formIndex: 0 });

    const handleDrawerChange = (categoryIndex: number, formIndex: number) => {
        setSelectedForm({ categoryIndex, formIndex });
        setOpen(false); // Fermer le menu après sélection
    };

    const onCloseDrawer = () => {
        setOpen(false);
    };

    return (
        <div className="App">
            <div className="form-open">
                <h1>Formulaires</h1>
                <Button type="primary" className="open-button" onClick={() => setOpen(true)}>
                    <MenuOutlined />
                    <span>Menu</span>
                </Button>
            </div>

            <Drawer
                width={500}
                placement="right"
                onClose={onCloseDrawer}
                open={open}
                destroyOnClose 
            >
                <Space direction="vertical" style={{ width: "100%" }}>
                    {forms.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <Divider>{category.title}</Divider>
                            <Space direction="vertical" className="ant-space-vertical">
                                {category.subcategories.map((form, formIndex) => (
                                    <Button
                                        key={formIndex}
                                        onClick={() => handleDrawerChange(categoryIndex, formIndex)}
                                    >
                                        {form.title}
                                    </Button>
                                ))}
                            </Space>
                        </div>
                    ))}
                </Space>
            </Drawer>

            <CategorizationRenderer
                schema={forms[selectedForm.categoryIndex].subcategories[selectedForm.formIndex].schema}
                uischema={{ type: "VerticalLayout", elements: [forms[selectedForm.categoryIndex].subcategories[selectedForm.formIndex].uischema] }}
                data={forms[selectedForm.categoryIndex].subcategories[selectedForm.formIndex].data}
                renderers={materialRenderers}
                onChange={({ data }: any) => console.log("Données modifiées :", data)}
            />
        </div>
    );
};

export default App;
