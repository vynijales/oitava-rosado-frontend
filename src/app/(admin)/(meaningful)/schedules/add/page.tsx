"use client";

import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { LabeledInput } from "@/components/widgets/LabeledInput";
import { LabeledSelect } from "@/components/widgets/LabeledSelect";
import { LabeledTextArea } from "@/components/widgets/LabeledTextArea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Page() {
    const items = [
        { text: "Home", link: "/home" },
        { text: "Agendamentos médicos", link: "/patients" },
        { text: "Criar novo agendamento médico", link: "/patients/add" },
    ];
    return (<>
        <Breadcrumbs items={items} />
        <div>
            <div className="flex justify-between items-center">
                <div
                    id="text-header"
                    className="text-white py-4">
                    <h1 className="text-3xl font-semibold">Criar novo agendamento médico </h1>
                    <h2 className="text-slate-200">Preencha os campos abaixo para criar um novo agendamento médico no sistema</h2>
                </div>
            </div>
            <div
                id="container"
                className="w-full h-full flex flex-col gap-8 bg-white p-8 rounded-lg shadow-md"
            >

                <section
                    id="informacoes_gerais"
                    className="flex flex-col gap-6"
                >
                    <div
                        className="grid grid-cols-1 xl:grid-cols-3 justify-between gap-7"
                    >
                        <LabeledSelect
                            name="medico"
                            label="Médico"
                            options={[
                                { value: "1", label: "Dr. João da Silva" },
                                { value: "2", label: "Dra. Maria da Silva" },
                            ]}
                        />

                        <LabeledSelect
                            name="paciente"
                            label="Paciente"
                            options={[
                                { value: "1", label: "Maria da Silva" },
                                { value: "2", label: "João da Silva" },
                            ]}
                        />

                        <LabeledInput
                            name="motivo"
                            label="Motivo da consulta"
                            type="text"
                            placeholder="Informe o motivo da consulta"
                        />

                        <LabeledInput
                            name="data"
                            label="Data"
                            type="date"
                            placeholder="Informe a data da consulta"
                        />

                        <LabeledInput
                            name="hora"
                            label="Hora"
                            type="time"
                            placeholder="Informe o horario da consulta"
                        />

                        <LabeledInput
                            name="local"
                            label="Local"
                            type="text"
                            placeholder="Informe o local da consulta"
                        />

                    </div>
                    <Separator className="mt-4" />
                </section>
            </div >
            <div
                className="flex justify-end items-center gap-8 mt-8"
            >
                <Button
                    className="w-full xl:w-auto xl:px-6"
                    variant={"cancel"}
                    onClick={() => history.back()}
                >
                    Cancelar
                </Button>

                <Button
                    type="submit"
                    className="w-full xl:w-auto xl:px-12"
                    variant={"save"}
                    onClick={() => alert("Paciente criado com sucesso!")}
                >
                    Salvar
                </Button>

            </div>


        </div >
    </>
    );
}