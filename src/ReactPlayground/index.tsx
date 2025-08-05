import { Allotment } from "allotment";
import 'allotment/dist/style.css';
import Header from "./components/Header/index";
import CodeEditor from "./components/CodeEditor/index";
import Preview from "./components/Preview/index";

export default function ReactPlayground() {
    return <div style={{height: '100vh'}}>
        <Header/>
        <Allotment defaultSizes={[100, 100]}>
            <Allotment.Pane minSize={0}>
                <CodeEditor />
            </Allotment.Pane>
            <Allotment.Pane minSize={0}>
                <Preview />
            </Allotment.Pane>
        </Allotment>
    </div>
}

