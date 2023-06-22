async function del(event, model) {

    if(confirm("Do you really want to delete this record?")){
      let id = event.target.id;

      console.log(id);
        
      fetch('/'+model+'/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': '{{ csrf_token() }}'
        },
      })
      .then(response => {
        if (response.ok) {
          // Handle success response
          console.log('Permission deleted successfully.');

          var button = event.target; // Get the clicked button
          var row = button.parentNode.parentNode; // Get the parent <tr> element
          row.parentNode.removeChild(row); // Remove the <tr> element from the DOM


        } else {
          // Handle error response
          console.log('Error deleting permission.');
        }
      })
      .catch(error => {
        // Handle network error
        console.log('Network error:', error);
      });

    }
  }