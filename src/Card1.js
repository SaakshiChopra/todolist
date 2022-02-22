import { Card, Button,Icon} from "semantic-ui-react";
const Card1 = ({ data, handleDelete, handleModal }) => {
  return (
    <>
      <div style={{ padding: "30px" }}>
        <Card raised={true} fluid={true} centered="true">
          <div style={{ padding: "30px" }}>
            <Card.Content>
              <Card.Description>
                
                {data}
               
                <Button
                  basic
                  color="red"
                  content="DELETE"
                  onClick={() => handleDelete(data)}
                  icon
                  floated='right'
                ><Icon name="trash alternate"/>
                  </Button>
                <Button
                  basic
                  color="blue"
                  content="EDIT"
                  onClick={() => handleModal(data)}
                icon
                floated='right'
                >
                  <Icon name="edit"/>
                </Button>
               
              </Card.Description>

              <br />
            </Card.Content>
          </div>
        </Card>
      </div>
    </>
  );
};
export default Card1;
