import styled from "styled-components";
import {
  FiCheckSquare,
  FiEdit,
  FiMail,
  FiPlus,
  FiMessageSquare,
  FiUpload,
} from "react-icons/fi";
import logoImg from "../images/review.png"; 

const Container = styled.div`
  background: #0e0e0e;
  color: #f5c146;
  padding: 45px;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  font-size: 1%;
`;

const Welcome = styled.h1`
  font-size: 40px;
  background: #0e0e0e;
  color: #f5c146;
  font-family: 'Segoe UI', sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 40px;
`;

const Card = styled.div`
  background: #1b1b1b;
  padding: 24px;
  border-radius: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: 0.3s ease;
  cursor: pointer;
  box-shadow: 0 0 0 1px #2a2a2a;

  &:hover {
    background: #252525;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    font-size: 26px;
  }
`;

const Small = styled.small`
  color: #aaa;
  font-size: 20px;
`;

const ActivitySection = styled.div`
  margin-top: 60px;
`;

const ActivityTitle = styled.h2`
  color: #fff;
  margin-bottom: 24px;
  font-size: 30px;
`;

const RecentActivityWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const LeftActivity = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ActivityBlock = styled.div`
  background: #1b1b1b;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const ActivityText = styled.div`
  color: #fff;
  p {
    margin: 0;
    font-size: 25px;
    font-weight: 500;
  }
`;

const RightActivityCard = styled.div`
  flex: 1;
  min-width: 350px;
  background: #1b1b1b;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export default function NipponAdminHome() {
  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Nippon Admin Logo" />
        <Welcome>Welcome, Admin</Welcome>
      </Header>

      <Grid>
        <Card>
          <FiCheckSquare size={40} color="#f5c146" />
          <TextGroup>
            <strong>Review</strong>
            <Small>New Submissions</Small>
          </TextGroup>
        </Card>
        <Card>
          <FiEdit size={40} color="#f5c146" />
          <TextGroup>
            <strong>Edit</strong>
            <Small>Site Content</Small>
          </TextGroup>
        </Card>
        <Card>
          <FiMail size={40} color="#f5c146" />
          <TextGroup>
            <strong>View</strong>
            <Small>User Messages</Small>
          </TextGroup>
        </Card>
      </Grid>

      <ActivitySection>
        <ActivityTitle>Recent Activity</ActivityTitle>
        <RecentActivityWrapper>
          <LeftActivity>
            <ActivityBlock>
              <ProfileImage src="https://randomuser.me/api/portraits/men/75.jpg" />
              <ActivityText>
                <p>Updated profile</p>
                <Small>20 minutes ago</Small>
              </ActivityText>
            </ActivityBlock>

            <ActivityBlock>
              <ProfileImage src="https://randomuser.me/api/portraits/men/75.jpg" />
              <ActivityText>
                <p>Added comment</p>
                <Small>3 hours ago</Small>
              </ActivityText>
            </ActivityBlock>
          </LeftActivity>

          <RightActivityCard>
            <ImagePreview src="https://images.unsplash.com/photo-1588361861040-351f6fb1f7c6" />
            <ActivityText>
              <p>Edited “Nippon Travel Guide”</p>
              <Small>1 hour ago</Small>
            </ActivityText>
          </RightActivityCard>
        </RecentActivityWrapper>
      </ActivitySection>

      <Grid style={{ marginTop: '40px' }}>
        <Card>
          <FiPlus size={40} color="#f5c146" />
          <TextGroup>
            <strong>Add Article</strong>
          </TextGroup>
        </Card>
        <Card>
          <FiMessageSquare size={40} color="#f5c146" />
          <TextGroup>
            <strong>Moderate</strong>
            <Small>Comment</Small>
          </TextGroup>
        </Card>
        <Card>
          <FiUpload size={40} color="#f5c146" />
          <TextGroup>
            <strong>Upload</strong>
            <Small>Media</Small>
          </TextGroup>
        </Card>
      </Grid>
    </Container>
  );
}
