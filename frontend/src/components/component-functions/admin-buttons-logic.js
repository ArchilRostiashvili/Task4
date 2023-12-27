export const blockUsers = (selectedUsers, user) => {
    selectedUsers.map((usr) => {
      const blockU = async () => {
        await fetch('http://taskfour-backend.onrender.com/api/user/' + usr._id, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            blocked: true
          }),
        });
      }

      blockU();
    });
  };

export const unblockUsers = (selectedUsers, user) => {
    selectedUsers.map((usr) => {
      const unblockU = async () => {
        await fetch('http://taskfour-backend.onrender.com/api/user/' + usr._id, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${user.token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            blocked: false
          }),
        });
      }

      unblockU();
    });
  };

export const deleteUsers = (selectedUsers, user) => {
    selectedUsers.map((usr) => {
      const deleteU = async () => {
        await fetch('http://taskfour-backend.onrender.com/api/user/' + usr._id, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })
      }

      deleteU();
    });
  };