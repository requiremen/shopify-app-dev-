import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  FormLayout,
  TextField,
  Button
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next"; 
import { useCallback, useState  } from "react";


export default function HomePage() {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSave = useCallback(async function(){
    setLoading(true);
    try {
      const response = await fetch("/api/post-purchase-message",{
        method: "POST",
        headers : {
          "content-type" :"application/json"
        },
        body: JSON.stringify({message})
      });
      if(response.ok){
        shopify.toast.show("message saved succesfully")
      }else{
        shopify.toast.show("not saved")
      }
    } catch (e) {
      shopify.toast.show("error saving message")
      console.error(e);
    }
    setLoading(false);
  },[message])

  return (<Page narrowWidth>
      <TitleBar title={t("HomePage.title")}>
        <button variant="primary" onClick={handleSave} disabled={loading}>
          Save
        </button>
      </TitleBar>
      <Layout>
        <Layout.Section>
          <Card sectioned title="Post-purchase Message">
            <FormLayout>
              {/* Text Input for the message */}
              <TextField
                label="Post-purchase message"
                value={message}
                onChange={setMessage} 
                multiline={4}        
                autoComplete="off"
                disabled={loading}
              />
              {/* Save Button */}
              <Button primary loading={loading} onClick={handleSave}>
                Save
              </Button>
            </FormLayout>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
