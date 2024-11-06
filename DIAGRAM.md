```mermaid
flowchart TB
  subgraph themes
    direction LR

    subgraph MD[Папка с темами]
      subgraph tw
        direction LR

        fonts --> styles -> main.css
        images --> index.html
        libs --> index.html
        pictures --> index.html
        styles --> index.html
        video --> index.html
      end
    end
  end
```
