import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, useIonViewWillEnter, IonButton, IonIcon, IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonTextarea, IonItem, IonLabel, IonList, IonReorder, IonReorderGroup } from "@ionic/react";
import { trashOutline } from "ionicons/icons";
import React from "react";


const List: React.FC = () => {
    const [notes, setNotes] = React.useState<{ id: number; title: string; content: string }[]>([]);
    const [newNoteTitle, setNewNoteTitle] = React.useState<string>("");
    const [newNoteContent, setNewNoteContent] = React.useState<string>("");
    const [editingNote, setEditingNote] = React.useState<{ id: number; title: string; content: string } | null>(null);

    const saveNotesToLocalStorage = (notes: { id: number; title: string; content: string }[]) => {
        localStorage.setItem("notes", JSON.stringify(notes));
    };

    const loadNotesFromLocalStorage = () => {
        const storedNotes = localStorage.getItem("notes");
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    };

    React.useEffect(() => {
        loadNotesFromLocalStorage();
    }, []);

    React.useEffect(() => {
        saveNotesToLocalStorage(notes);
    }, [notes]);


    const addNote = () => {
        const newNote = {
            id: Date.now(),
            title: newNoteTitle,
            content: newNoteContent,
        };
        setNotes([...notes, newNote]);
        setNewNoteTitle("");
        setNewNoteContent("");
    };
    const updateNote = (updatedNote: { id: number; title: string; content: string }) => {
        setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
        setEditingNote(null);
    };
    const deleteNote = (noteId: number) => {
        setNotes(notes.filter(note => note.id !== noteId));
    };
    //const getUsers = async () => {
    //    const data = await fetch( "https://jsonplaceholder.typicode.com/users");
    //    const users = await data.json();
    //    return users.results;
    //};

    const clearList = () => {
    };

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>List</IonTitle>
                <IonButtons slot="end">
                    <IonButton onClick={clearList}>
                        <IonIcon slot="icon-only" icon={trashOutline} />
                    </IonButton>
                </IonButtons>
            </IonToolbar>
            <IonToolbar color="secondary">
                <IonSearchbar />
            </IonToolbar>
        </IonHeader>
    
        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Add Note</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonInput
                        placeholder="Title"
                        value={newNoteTitle}
                        onIonChange={e => setNewNoteTitle(e.detail.value!)}
                    />
                    <IonTextarea
                        placeholder="Content"
                        value={newNoteContent}
                        onIonChange={e => setNewNoteContent(e.detail.value!)}
                    />
                    <IonButton onClick={addNote}>Add Note</IonButton>
                </IonCardContent>
            </IonCard>

            {editingNote && (
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Edit Note</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonInput
                            value={editingNote.title}
                            onIonChange={e => setEditingNote({ ...editingNote, title: e.detail.value! })}
                        />
                        <IonTextarea
                            value={editingNote.content}
                            onIonChange={e => setEditingNote({ ...editingNote, content: e.detail.value! })}
                        />
                        <IonButton onClick={() => updateNote(editingNote)}>Save Changes</IonButton>
                    </IonCardContent>
                </IonCard>
            )}

            <IonList>
                <IonReorderGroup
                    disabled={false}
                    onIonItemReorder={e => {
                        const reorderedNotes = [...notes];
                        const [movedItem] = reorderedNotes.splice(e.detail.from, 1);
                        reorderedNotes.splice(e.detail.to, 0, movedItem);
                        setNotes(reorderedNotes);
                        e.detail.complete();
                    }}
                >
                    {notes.map(note => (
                        <IonItem key={note.id}>
                            <IonLabel>
                                <h2>{note.title}</h2>
                                <p>{note.content}</p>
                            </IonLabel>
                            <IonButton slot="end" onClick={() => setEditingNote(note)}>Edit</IonButton>
                            <IonButton slot="end" color="danger" onClick={() => deleteNote(note.id)}>Delete</IonButton>
                            <IonReorder slot="end" />
                        </IonItem>
                    ))}
                </IonReorderGroup>
            </IonList>
        </IonContent>
        </IonPage>
    );
};

export default List;