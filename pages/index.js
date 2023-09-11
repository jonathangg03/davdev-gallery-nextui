import Head from "next/head";
import router from "next/router";
import {
  Container,
  Row,
  Col,
  Grid,
  Spacer,
  Text,
  Button,
  Loading,
} from "@nextui-org/react";
import { Camera } from "react-iconly";
import useImages from "../hooks/useImages";

export default function Home() {
  const { images, error, isValidating } = useImages();

  return (
    <>
      <Head>
        <meta name="description" content="App de galería con Nextjs y NextUI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Container fluid>
          <Row>
            <Col>
              {images && (
                <Button
                  flat
                  color="success"
                  auto
                  iconRight={<Camera fill="white" />}
                  onClick={() => router.push("/new")}
                >
                  Nueva imagen
                </Button>
              )}
              {error && <Text color="error">{error.message}</Text>}
              {isValidating && (
                <Loading type="points" color="success" textColor="success">
                  Cargando imagenes
                </Loading>
              )}
            </Col>
          </Row>
        </Container>
        <Spacer y={0.5} />
        <Grid.Container gap={0.1}>
          {images?.map((image) => {
            return (
              <Grid key={image._id} xs={12} sm={6} md={3}>
                <div align="center">
                  <img src={image.publicUrl} alt={image.title} />
                  <Text color="white" h2 align="center">
                    {image.title}
                  </Text>
                  <Spacer y={0.1} />
                  <Text color="white" align="center">
                    {image.description}
                  </Text>
                  <Spacer y={0.3} />
                  <a href={image.publicUrl} rel="noreferrer" target="_blank">
                    <Button flat color="secondary">
                      <span>Ver imagen</span>
                    </Button>
                  </a>
                  <Spacer y={0.5} />
                  <Button
                    flat
                    color="error"
                    size="medium"
                    onClick={(event) =>
                      router.push(`/${event.target.id}/delete`)
                    }
                    id={image._id}
                  >
                    <span id={image._id}>Eliminar</span>
                  </Button>
                  <Spacer y={0.1} />
                </div>
              </Grid>
            );
          })}
        </Grid.Container>
      </section>

      <style jsx>{`
        div,
        section {
          padding: 10px;
          width: 100%;
        }

        div {
          border: 1px solid #444;
          margin: 0 5px 15px;
          border-radius: 10px;
        }

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
      `}</style>
    </>
  );
}
