// import React from "react";
import { useState } from 'react'
import axios from 'axios'
// import * as Yup from "yup";
import { Form, Formik } from "formik";
// import api from "../../services/api";
import { Input, Button, Card, CardBody } from "reactstrap";
// import InputFile from "../../components/Input/InputFile.js";
// import PhotoContext from "../../context/photoContext";
// import pictureDefault from "../../assets/avatar_profile.png";
import './cadastro.css'
// import "../../components/Select/Select.css";
// import "../../components/Button/Button.css";

export default function FormComponent() {
    const [registro, setRegistro] = useState({
        validade: "",
        categoria_cnh: "",
        nome: "",
        cpf: "",
        data_primeira_habilitacao: "",
        data_nascimento: "",
        data_validade_cnh: "",
        cod_nacionalidade: "",
        nome_mae: "",
        nome_pai: "",
        cod_documento: "",
        numero_documento: "",
        orgao_expedidor_documento: "",
        uf_expedidor_documento: "",
        numero_registro: "",
        cod_sexo: "",
        uf_emissao: "",
        retrato: "",
        endereco_logradouro: "",
        endereco_numero: "",
        endereco_complemento: "",
        endereco_bairro: "",
        endereco_cep: "",
        endereco_cod_municipio: "",
        endereco_descricao_municipio: "",
        endereco_uf: "",
        cod_situacao_cnh: "",
        registro_nacional_estrangeiro: "",
        data_ultima_emissao_historico: "",
        quadro_observacoes_cnh: "",
        quantidade_ocorrencias_impedimentos: "",
    });

    const handleSubmit = () => {
        console.log(registro)
        const objToSend = {
            key: {
              cpf: registro.cpf
            },
            answer: {
              nome: registro.nome,
              data_nascimento: registro.data_nascimento,
              situacao_cpf: registro.cod_situacao_cnh,
              sexo: registro.cod_sexo,
              nacionalidade: registro.cod_nacionalidade,
              cnh: {
                numero_registro: registro.numero_registro,
                categoria: registro.categoria_cnh,
                codigo_situacao: "3",
                data_ultima_emissao: "2000-10-01",
                data_validade: "2005-12-10",
                data_primeira_habilitacao: "2000-10-31",
                registro_nacional_estrangeiro: "123456",
                possui_impedimento: true,
                observacoes: "ear"
              },
              filiacao: {
                nome_mae: "Maria José",
                nome_pai: "José Maria"
              },
              documento: {
                tipo: 1,
                numero: "000001",
                orgao_expedidor: "SSP",
                uf_expedidor: "DF"
              },
              endereco: {
                logradouro: "Nome do Logradouro",
                numero: "0007",
                complemento: "APTO 2015",
                bairro: "Nome do Bairro",
                cep: "0000001",
                municipio: "Nome do municipio",
                uf: "DF"
              }
            }
          }
        axios.post("http://localhost:3000/dv-pf-basica", objToSend).then(res => alert(res.data.msg)).then(() => history.back())
    }
    return (
        <>
            <div className="driver-form animated fadeIn">
                <div className="driver-form-title">
                    <h1>
                        Cadastrar Registro
                    </h1>
                </div>

                <Card>
                    <CardBody>
                        <Formik
                            initialValues={{}}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                {/* <div className="title">Campos obrigatórios</div> */}
                                <div className="br-input" style={{ marginBottom: "10px" }}>
                                    <label className="label">CPF:</label>
                                    <Input
                                        name="cpf"
                                        // defaultValue={registro.cpf}
                                        placeholder="00000000000"
                                        minLength={11}
                                        maxLength={11}
                                        pattern="[0-9]+$"
                                        style={{ width: "20%" }}
                                        required
                                        onChange={(e) => setRegistro({ ...registro, cpf: e.target.value })}
                                    />
                                </div>
                                {/* {pesquisado && ( */}
                                <>

                                    <div className="br-input">
                                        <label className="label">Nome:</label>
                                        <Input
                                            name="nome"
                                            pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                                            placeholder='Digite o nome completo'
                                            style={{ width: "50%", marginBottom: "10px" }}
                                            // defaultValue={registro.nome}
                                            required
                                            onChange={(e) =>
                                                setRegistro({ ...registro, nome: e.target.value })
                                            }
                                        // {...field}
                                        // // disabled={ehRegistroCanonico}
                                        />
                                    </div>
                                    <div className="upload-input">
                                        <label className="label">Retrato:</label>
                                        {/* <InputFile
                        // disabled={ehRegistroCanonico}
                        name="retrato"
                        base64={registro.foto}
                      /> */}
                                        <br></br>
                                    </div>

                                    {/* <div className="title">Campos opcionais</div> */}

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label className="label">Nacionalidade:</label>

                                            <Input
                                                type="select"
                                                name="cod_nacionalidade"
                                                className="br-select"
                                                id="cod_nacionalidade"
                                                onChange={(e) =>
                                                    setRegistro({
                                                        ...registro,
                                                        cod_nacionalidade: e.target.value,
                                                    })
                                                }
                                            // {...field}
                                            //   value={registro.cod_nacionalidade}
                                            //   disabled={ehRegistroCanonico}
                                            >
                                                <option value="1">brasileiro</option>
                                                <option value="2">brasileiro naturalizado</option>
                                                <option value="3">estrangeiro</option>
                                                <option value="4">
                                                    brasileiro nascido no exterior
                                                </option>
                                            </Input>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">Nome do pai:</label>

                                                <Input
                                                    name="nome_pai"
                                                    // defaultValue={registro.nome_pai}
                                                    style={{ width: "100%" }}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            nome_pai: e.target.value,
                                                        })
                                                    }
                                                // {...field}
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label className="label">Sexo:</label>
                                            <Input
                                                type="select"
                                                className="br-select"
                                                id="cod_sexo"
                                                onChange={(e) =>
                                                    setRegistro({
                                                        ...registro,
                                                        cod_sexo: e.target.value,
                                                    })
                                                }
                                            //   value={registro.cod_sexo}
                                            //   disabled={ehRegistroCanonico}
                                            >
                                                <option value="2">feminino</option>
                                                <option value="1">masculino</option>
                                                <option value="3">outro</option>
                                            </Input>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">Nome da mãe:</label>
                                                <Input
                                                    name="nome_mae"
                                                    // defaultValue={registro.nome_mae}
                                                    style={{ width: "100%" }}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            nome_mae: e.target.value,
                                                        })
                                                    }
                                                // {...field}
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label className="label">Documento:</label>

                                            <Input
                                                type="select"
                                                className="br-select"
                                                id="cod_documento"
                                                onChange={(e) => {
                                                    setRegistro({
                                                        ...registro,
                                                        cod_documento: e.target.value,
                                                    });
                                                    console.log(e.target.value);
                                                }}
                                            //   value={registro.cod_documento}
                                            //   disabled={ehRegistroCanonico}
                                            >
                                                <option value="1">carteira de identidade</option>
                                                <option value="2">carteira profissional</option>
                                                <option value="3">passaporte</option>
                                                <option value="4">carteira de reservista</option>
                                            </Input>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">Número do documento:</label>
                                                <Input
                                                    name="numero_documento"
                                                    placeholder="0000000"
                                                    style={{ width: "210px" }}
                                                    // defaultValue={registro.numero_documento}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            numero_documento: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">
                                                    Órgão Expedidor do documento:
                                                </label>
                                                <Input
                                                    name="orgao_expedidor_documento"
                                                    placeholder="MTE"
                                                    style={{ width: "100px", marginBottom: "10px" }}
                                                    // defaultValue={registro.orgao_expedidor_documento}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            orgao_expedidor_documento: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">
                                                    UF Expedidor do documento:
                                                </label>
                                                <Input
                                                    name="uf_expedidor_documento"
                                                    placeholder="SP"
                                                    style={{ width: "100px", marginBottom: "10px" }}
                                                    // defaultValue={registro.uf_expedidor_documento}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            uf_expedidor_documento: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">UF de Emissão:</label>
                                                <Input
                                                    name="uf_emissao"
                                                    style={{ width: "20%", marginBottom: "10px" }}
                                                    // defaultValue={registro.uf_emissao}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            uf_emissao: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">
                                                    Descrição do município:
                                                </label>
                                                <Input
                                                    name="endereco_descricao_municipio"
                                                    style={{ width: "60%", marginBottom: "10px" }}
                                                    // defaultValue={registro.endereco_descricao_municipio}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            endereco_descricao_municipio: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        {/* outra div aqui */}
                                        <div className="col-sm-4">
                                            <div className="br-input">
                                                <label className="label">Número:</label>
                                                <Input
                                                    name="endereco_numero"
                                                    style={{ width: "60%", marginBottom: "10px" }}
                                                    // defaultValue={registro.endereco_numero}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            endereco_numero: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">Logradouro:</label>
                                                <Input
                                                    name="endereco_logradouro"
                                                    style={{ width: "60%", marginBottom: "10px" }}
                                                    // defaultValue={registro.endereco_logradouro}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            endereco_logradouro: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">Complemento:</label>
                                                <Input
                                                    name="endereco_complemento"
                                                    style={{ width: "60%", marginBottom: "10px" }}
                                                    // defaultValue={registro.endereco_complemento}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            endereco_complemento: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">Bairro:</label>
                                                <Input
                                                    name="endereco_bairro"
                                                    style={{ width: "60%", marginBottom: "10px" }}
                                                    // defaultValue={registro.endereco_bairro}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            endereco_bairro: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">UF:</label>
                                                <Input
                                                    name="endereco_uf"
                                                    placeholder="SP"
                                                    style={{ width: "20%", marginBottom: "10px" }}
                                                    // defaultValue={registro.endereco_uf}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            endereco_uf: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">CEP:</label>
                                                <Input
                                                    name="endereco_cep"
                                                    placeholder="00000000"
                                                    style={{ width: "170px", marginBottom: "10px" }}
                                                    // defaultValue={registro.endereco_cep}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            endereco_cep: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">Número do registro:</label>
                                                <Input
                                                    name="numero_registro"
                                                    placeholder="000000000000"
                                                    style={{ width: "60%", marginBottom: "10px" }}
                                                    // defaultValue={registro.numero_registro}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            numero_registro: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label className="label">Situação da CNH:</label>
                                            <div className="select">
                                                <Input
                                                    type="select"
                                                    className="br-select"
                                                    id="cod_situacao_cnh"
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            cod_situacao_cnh: e.target.value,
                                                        })
                                                    }
                                                // value={registro.cod_situacao_cnh}
                                                // disabled={ehRegistroCanonico}
                                                >
                                                    <option value="2">em emissão</option>
                                                    <option value="3">emitida</option>
                                                    <option value="A">cancelada</option>
                                                </Input>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">
                                                    Data de validade da CNH:
                                                </label>

                                                <Input
                                                    type="date"
                                                    max="9999-12-31"
                                                    name="data_validade_cnh"
                                                    style={{ width: "30%", marginBottom: "10px" }}
                                                    // defaultValue={registro.data_validade_cnh}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            data_validade_cnh: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">Categoria CNH:</label>
                                                <Input
                                                    name="categoria_cnh"
                                                    placeholder="A,B,C"
                                                    style={{ width: "170px", marginBottom: "10px" }}
                                                    // defaultValue={registro.categoria_cnh}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            categoria_cnh: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">
                                                    Data da primeira habilitação:
                                                </label>
                                                <Input
                                                    type="date"
                                                    max="9999-12-31"
                                                    name="data_primeira_habilitacao"
                                                    style={{ width: "30%", marginBottom: "10px" }}
                                                    // defaultValue={registro.data_primeira_habilitacao}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            data_primeira_habilitacao: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">
                                                    Registro Nacional estrangeiro:
                                                </label>
                                                <Input
                                                    name="registro_nacional_estrangeiro"
                                                    style={{ width: "170px", marginBottom: "10px" }}
                                                    // defaultValue={
                                                    //   registro.registro_nacional_estrangeiro
                                                    // }
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            registro_nacional_estrangeiro: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">
                                                    Data da ultima emissão:
                                                </label>
                                                <Input
                                                    type="date"
                                                    max="9999-12-31"
                                                    name="data_ultima_emissao_historico"
                                                    style={{ width: "30%", marginBottom: "10px" }}
                                                    // value={registro.data_ultima_emissao_historico}
                                                    onChange={(e) => {
                                                        setRegistro({
                                                            ...registro,
                                                            data_ultima_emissao_historico: e.target.value,
                                                        });
                                                    }}
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">Data de nascimento:</label>
                                                <Input
                                                    type="date"
                                                    max="9999-12-31"
                                                    name="data_nascimento"
                                                    style={{ width: "30%", marginBottom: "10px" }}
                                                    // defaultValue={registro.data_nascimento}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            data_nascimento: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                                <br></br>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">
                                                    Quantidade de Ocorrencias e Impedimentos:
                                                </label>
                                                <Input
                                                    name="quantidade_ocorrencias_impedimentos"
                                                    style={{ width: "170px", marginBottom: "10px" }}
                                                    // defaultValue={
                                                    //   registro.quantidade_ocorrencias_impedimentos
                                                    // }
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            quantidade_ocorrencias_impedimentos:
                                                                e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="br-input">
                                                <label className="label">Observações CNH:</label>
                                                <Input
                                                    name="quadro_observacoes_cnh"
                                                    style={{ width: "60%", marginBottom: "10px" }}
                                                    // defaultValue={registro.quadro_observacoes_cnh}
                                                    onChange={(e) =>
                                                        setRegistro({
                                                            ...registro,
                                                            quadro_observacoes_cnh: e.target.value,
                                                        })
                                                    }
                                                // disabled={ehRegistroCanonico}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        className="br-button"
                                        style={{ marginTop: "1em" }}
                                        type="submit"
                                        outline
                                    >
                                        Cadastrar
                                    </Button>
                                </>
                                {/* )} */}
                            </Form>
                        </Formik>
                    </CardBody>
                </Card>
            </div>
        </>
    );
}
