import React from 'react';
import { Collapse,Tag } from 'antd';
const { Panel } = Collapse;


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a style={{ marginRight: 16 }}>Invite {record.name}</a>
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Innovative security',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, to make a type specimen book. It has survived not only five ',
    img: "https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/finiance-icon-03.png",
  },
  {
    key: '2',
    name: 'Purchase Protection',
    description: 'Etiam magna arcu, ullamcorper ut pulvinar et, ornare sit amet ligula. Aliquam vitae bibendum lorem. Cras id dui lectus. Pellentesque nec felis tristique urna lacinia sollicitudin ac ac ex. Maecenas mattis ondimentum.',
    img: "https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/finiance-icon-01.png",
  },
  {
    key: '3',
    name: 'Send Money Instantly',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,',
    img: "https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/finiance-icon-02.png",
  },
  {
      key: '4',
      name: 'Purchase Protection',
      description: 'Etiam magna arcu, ullamcorper ut pulvinar et, ornare sit amet ligula. Aliquam vitae bibendum lorem. Cras id dui lectus. Pellentesque nec felis tristique urna lacinia sollicitudin ac ac ex. Maecenas mattis ondimentum.',
      img: "https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/finiance-icon-01.png",
  },
  {
      key: '5',
      name: 'Send Money Instantly',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,',
      img: "https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/finiance-icon-02.png",
    },
  {
      key: '6',
      name: 'Innovative security',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, to make a type specimen book. It has survived not only five ',
      img: "https://www.elegantthemes.com/layouts/wp-content/uploads/2018/01/finiance-icon-03.png",
    },
];


class Third extends React.Component{
    render(){
        return(
            <div>
                <h1 className="page-title">Collapse Section Data Here</h1>
                <div className="collapse-section">
                   {
                       data.map((item)=> {
                           return(
                            <Collapse accordion>
                                <Panel header={item.name} >
                                    <p>{item.description}</p>
                                </Panel>
                            </Collapse>
                           )
                       })
                   }
                
                </div>
            </div>
        )
    }
}

export default Third;