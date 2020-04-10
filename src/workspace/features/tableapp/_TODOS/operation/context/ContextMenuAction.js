import React from 'react'
import styled from 'styled-components'
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../../../components'
import { beatlesData } from '../../../data/json/beatles'

export class ContextMenuAction extends React.Component {

  contextRef = React.createRef();

	state = {
    beatles: beatlesData,
    columns: Object.keys(beatlesData[0]),
    menu : [
      {"label":"Item 1", "callback": this.itemCallback},
      {"label":"Menu item 2", "callback": this.item2Callback},
      {"label":"Apple", "callback": this.appleCallback},
      {"label":"This is orange", "callback": this.orangeCallback},
      {"label":"Conetxt menu is fun"},
      {"label":"Cool", "callback": this.coolCallback}],
    visible: false,
    x: 0,
    y: 0
  }

  itemCallback() {
    alert("clicked on Item 1")
  }
    
  item2Callback() {
    alert("clicked on Item 2")
  }
    
  appleCallback() {
    alert("clicked on Apple")
  }

  orangeCallback() {
    alert("clicked on Orange")
  }

  coolCallback(){
    alert("clicked on Cool")
  }

  click(index) {
    if(index && this.state.menu[index].callback)
      this.state.menu[index].callback();
    else{
      console.log("callback not registered for the menu item")
    }
  }

  componentDidMount(){
    var self=this;
    document.addEventListener('contextmenu', function(event){
      event.preventDefault();
      const clickX = event.clientX;
      const clickY = event.clientY;
      self.setState({ visible: true, x: clickX, y: clickY });
    });

    document.addEventListener('click', function(event){
      if(self.contextRef.current && self.contextRef.current.id==='customcontext'){
        self.click(event.target.getAttribute('index'));
      }
      event.preventDefault();
      self.setState({ visible: false, x:0, y:0});
    });
  }

  returnMenu(items){
    var myStyle = {
    'position': 'absolute',
    'top': `${this.state.y}px`,
    'left':`${this.state.x+5}px`
    }

    return <StyleContextMenu className='custom-context' id='customcontext' ref={this.contextRef} style={myStyle}>
      {items.map((item, index) =>{
          return <>
            <div key={index} index={index} className='custom-context-item'>{item.label}</div>
          </>
      })}
    </StyleContextMenu>;
  }
  

	render() {
    const { beatles, columns, menu } = this.state
    
    
		return (
      <StyleTable>
        <Table>
          <Caption>
              Right Click - Context Menu
          </Caption>
          <THead>
            <TR>
              {columns.map((col, index) => (
                <TH>{col}</TH>
              ))}
            </TR>
          </THead>
          <TBody>
            {beatles.map((beatle, index) => (
                <TR key={index}>
                  {columns.map((col, index) => (
                  <TD>
                    {beatle[col]}
                  </TD>
                  
                  ))}
                </TR>
            ))}
          </TBody>
          <TFoot>
            <TR>
              <TH colSpan="7">(c) footer</TH>
            </TR>
          </TFoot>
        </Table>
        {this.state.visible ? this.returnMenu(menu): null}
      </StyleTable>
		)
	}
}

const StyleTable = styled.div`
  
` 
const StyleContextMenu = styled.div`
  border: solid 1px #ccc;
  display: inline-block;
  margin: 5px;
  background: #FFF;
  color: #000;
  cursor: pointer;
  font-size: 12px;
  .custom-context-item{
    border-bottom: dotted 1px #ccc;
    padding: 5px 25px;
   }
`
